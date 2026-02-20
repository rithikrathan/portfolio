import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Activity = () => {
	const githubUsername = "rithikrathan";

	const [activities, setActivities] = useState([]);
	const [loadingTimeline, setLoadingTimeline] = useState(true);
	const [timelineError, setTimelineError] = useState(null);

	const [statsData, setStatsData] = useState({
		followers: 0,
		repos: 0,
		topLangs: [],
		latestRepo: null
	});
	const [loadingStats, setLoadingStats] = useState(true);

	useEffect(() => {
		const fetchGitHubActivity = async () => {
			try {
				const response = await fetch(
					`https://api.github.com/users/${githubUsername}/events?per_page=6`
				);
				if (!response.ok) throw new Error("GitHub API limit reached");

				const data = await response.json();
				setActivities(Array.isArray(data) ? data : []);
			} catch (err) {
				setTimelineError(err.message);
			} finally {
				setLoadingTimeline(false);
			}
		};

		const fetchStats = async () => {
			try {
				const [userRes, reposRes] = await Promise.all([
					fetch(`https://api.github.com/users/${githubUsername}`),
					fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100`)
				]);

				if (!userRes.ok || !reposRes.ok) throw new Error("Stats fetch failed");

				const userData = await userRes.json();
				const reposData = await reposRes.json();

				const langMap = {};
				reposData.forEach(repo => {
					if (repo.language) {
						langMap[repo.language] = (langMap[repo.language] || 0) + 1;
					}
				});

				const topLangs = Object.entries(langMap)
					.sort((a, b) => b[1] - a[1])
					.slice(0, 4)
					.map(lang => lang[0]);

				const latestRepo = reposData.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))[0];

				setStatsData({
					followers: userData.followers,
					repos: userData.public_repos,
					topLangs,
					latestRepo: latestRepo ? {
						name: latestRepo.name,
						url: latestRepo.html_url,
						language: latestRepo.language
					} : null
				});
			} catch (err) {
				console.error("Error fetching stats:", err);
			} finally {
				setLoadingStats(false);
			}
		};

		fetchGitHubActivity();
		fetchStats();
	}, [githubUsername]);

	const formatEvent = (type) => {
		switch (type) {
			case "PushEvent": return "Pushed to";
			case "CreateEvent": return "Created";
			case "PullRequestEvent": return "Opened PR in";
			case "WatchEvent": return "Starred";
			case "ForkEvent": return "Forked";
			case "IssuesEvent": return "Opened issue in";
			case "IssueCommentEvent": return "Commented in";
			case "DeleteEvent": return "Deleted in";
			default: return type?.replace("Event", "") || "Activity in";
		}
	};

	return (
		<section
			id="activity"
			// MATCHED: Removed min-h-screen, adjusted padding, added relative
			className="flex items-center justify-center pb-16 pt-8 overflow-hidden relative"
		>
			<div className="w-full max-w-4xl px-4 mx-auto relative z-10">
				<RevealOnScroll>
					<div className="w-full">
						<h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent text-center">
							GitHub Stats & Activity
						</h2>

						<div className="flex flex-col gap-6 sm:gap-8">

							{/* 1. TOP: 1-Year Contribution Heatmap */}
							<div className="p-4 sm:p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-orange-500/30 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col items-center w-full min-h-[160px] sm:min-h-[200px] will-change-transform">
								<h3 className="text-xs sm:text-sm font-semibold text-gray-400 mb-4 sm:mb-6 self-start w-full">Contributions Heatmap (1 Year)</h3>

								<div className="w-full overflow-x-auto pb-2 custom-scrollbar">
									<img
										src={`https://ghchart.rshah.org/ea580c/${githubUsername}`}
										alt="GitHub 1-Year Heatmap"
										className="min-w-[600px] sm:min-w-[800px] w-full max-w-[1000px] h-auto invert hue-rotate-180 opacity-80 contrast-125 hover:opacity-100 transition-all"
									/>
								</div>
							</div>

							{/* 2. 31-Day Activity Line Graph */}
							<div className="p-4 sm:p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-orange-500/30 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col items-center w-full will-change-transform">
								<h3 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2 sm:mb-4 self-start w-full">Activity Overview (31 Days)</h3>

								<div className="w-full flex justify-center overflow-hidden">
									<img
										src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&bg_color=transparent&color=9ca3af&line=f97316&point=ffffff&area=true&hide_border=true&hide_title=true`}
										alt="GitHub Activity Graph"
										className="w-full max-w-[800px] h-auto opacity-90 hover:opacity-100 transition-all object-contain"
									/>
								</div>
							</div>

							{/* SIDE-BY-SIDE LAYOUT: Timeline on Left (60%), Cards on Right (40%) */}
							<div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 w-full">

								{/* LEFT: Live Timeline */}
								<div className="md:col-span-3 p-4 sm:p-6 rounded-xl border border-white/10 bg-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col w-full h-full">
									<h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Live Activity</h3>

									{loadingTimeline ? (
										<p className="text-gray-400 text-sm animate-pulse">Fetching timeline...</p>
									) : timelineError ? (
										<p className="text-red-400 text-sm">{timelineError}</p>
									) : activities.length === 0 ? (
										<p className="text-gray-400 text-sm">No recent public activity found.</p>
									) : (
										<div className="relative border-l-2 border-orange-500/20 ml-3 space-y-6">
											{activities.map((activity) => {
												const repoName = activity?.repo?.name || "unknown-repo";
												const shortRepoName = repoName.includes('/') ? repoName.split('/')[1] : repoName;

												return (
													<div key={activity.id} className="relative pl-6 group">
														<span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-orange-500 group-hover:bg-orange-500 group-hover:shadow-[0_0_10px_rgba(249,115,22,0.8)] transition-all" />

														<div className="flex flex-col min-w-0">
															<span className="text-sm text-gray-300">
																{formatEvent(activity.type)}{" "}
																<a
																	href={`https://github.com/${repoName}`}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-orange-400 hover:text-red-400 font-semibold transition-colors truncate block mt-0.5"
																>
																	{shortRepoName}
																</a>
															</span>
															<span className="text-xs text-gray-500 mt-1">
																{new Date(activity.created_at).toLocaleDateString(undefined, {
																	month: 'short', day: 'numeric', year: 'numeric'
																})}
															</span>
														</div>
													</div>
												);
											})}
										</div>
									)}
								</div>

								{/* RIGHT: 4 Stats Cards (2x2 Grid) */}
								<div className="md:col-span-2 flex flex-col gap-3 sm:gap-4 h-fit">

									{/* Card 1: Main Overview */}
									<div className="col-span-1 p-3 sm:p-5 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-orange-500/30 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center w-full min-h-[100px] sm:min-h-[140px] will-change-transform">
										<h4 className="text-orange-500 font-bold mb-1 sm:mb-3 text-xs sm:text-sm">Overview</h4>
										{loadingStats ? (
											<div className="animate-pulse w-full flex justify-around"><div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/10 rounded"></div><div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/10 rounded"></div></div>
										) : (
											<div className="flex justify-around w-full gap-1 sm:gap-3">
												<div className="flex flex-col items-center">
													<span className="text-xl sm:text-2xl font-bold text-gray-200">{statsData.repos}</span>
													<span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mt-0.5">Repos</span>
												</div>
												<div className="flex flex-col items-center">
													<span className="text-xl sm:text-2xl font-bold text-gray-200">{statsData.followers}</span>
													<span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mt-0.5">Followers</span>
												</div>
											</div>
										)}
									</div>

									{/* Card 2: Top Languages */}
									<div className="col-span-1 p-3 sm:p-5 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-red-500/30 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center w-full min-h-[100px] sm:min-h-[140px] will-change-transform">
										<h4 className="text-red-500 font-bold mb-1 sm:mb-3 text-xs sm:text-sm">Top Languages</h4>
										{loadingStats ? (
											<div className="animate-pulse flex gap-1 sm:gap-2"><div className="w-10 h-4 sm:w-12 sm:h-5 bg-white/10 rounded-full"></div><div className="w-10 h-4 sm:w-12 sm:h-5 bg-white/10 rounded-full"></div></div>
										) : (
											<div className="flex flex-wrap gap-1 justify-center w-full">
												{statsData.topLangs.length > 0 ? statsData.topLangs.map(lang => (
													<span
														key={lang}
														className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 bg-orange-500/10 rounded-full text-[10px] sm:text-xs text-orange-400 border border-orange-500/50 shadow-[0_0_10px_rgba(249,115,22,0.3)] font-medium"
													>
														{lang}
													</span>
												)) : <span className="text-[10px] sm:text-xs text-gray-500">No data</span>}
											</div>
										)}
									</div>

									{/* Card 3: Streak */}
									<div className="col-span-1 p-2 sm:p-3 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-orange-500/30 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex justify-center items-center w-full min-h-[100px] sm:min-h-[140px] overflow-hidden will-change-transform">
										<img
											src={`https://streak-stats.demolab.com/?user=${githubUsername}&theme=transparent&hide_border=true&ring=f97316&fire=ef4444&currStreakLabel=9ca3af&currStreakNum=ffffff&sideNums=ffffff&sideLabels=9ca3af&dates=9ca3af`}
											alt="Streak Stats"
											className="w-full h-auto object-contain"
										/>
									</div>

									{/* Card 4: Recently Active Repo */}
									<div className="col-span-1 p-3 sm:p-5 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-red-500/30 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center w-full min-h-[100px] sm:min-h-[140px] text-center min-w-0 will-change-transform">
										<h4 className="text-red-500 font-bold mb-1 sm:mb-3 text-xs sm:text-sm">Latest Push</h4>
										{loadingStats ? (
											<div className="animate-pulse flex flex-col items-center gap-1 sm:gap-2 w-full"><div className="w-16 h-3 sm:w-20 h-4 bg-white/10 rounded"></div><div className="w-12 h-2 sm:w-14 h-3 bg-white/10 rounded"></div></div>
										) : statsData.latestRepo ? (
											<div className="flex flex-col items-center w-full min-w-0 px-1">
												<a
													href={statsData.latestRepo.url}
													target="_blank"
													rel="noopener noreferrer"
													className="text-gray-200 font-semibold hover:text-orange-400 transition-colors truncate w-full mb-0.5 sm:mb-1 text-xs sm:text-sm block"
													title={statsData.latestRepo.name}
												>
													{statsData.latestRepo.name}
												</a>
												<span className="text-[10px] sm:text-xs text-gray-400 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-white/5 rounded-md border border-white/10 mt-1">
													{statsData.latestRepo.language || "Code"}
												</span>
											</div>
										) : <span className="text-[10px] sm:text-xs text-gray-500">No projects</span>}
									</div>

								</div>
							</div>
						</div>
					</div>
				</RevealOnScroll>
			</div>
		</section>
	);
};
