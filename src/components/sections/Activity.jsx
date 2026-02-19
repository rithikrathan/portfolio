import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Activity = () => {
	const githubUsername = "rithikrathan";
	const [activities, setActivities] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchGitHubActivity = async () => {
			try {
				const response = await fetch(
					`https://api.github.com/users/${githubUsername}/events?per_page=6`
				);
				if (!response.ok) throw new Error("GitHub API limit reached or user not found");

				const data = await response.json();

				if (Array.isArray(data)) {
					setActivities(data);
				} else {
					setActivities([]);
				}
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchGitHubActivity();
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
			className="min-h-screen flex items-center justify-center py-20 relative px-4 sm:px-6"
		>
			<RevealOnScroll>
				<div className="max-w-[1400px] mx-auto w-full relative z-10">

					<h2 className="text-3xl sm:text-4xl font-bold mb-10 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent text-center">
						GitHub Stats & Activity
					</h2>

					<div className="flex flex-col gap-8">

						{/* 1. TOP: Live Timeline */}
						<div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-3xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col">
							<h3 className="text-xl font-bold text-white mb-6">Live Activity</h3>

							{loading ? (
								<p className="text-gray-400 text-sm animate-pulse">Fetching timeline...</p>
							) : error ? (
								<p className="text-red-400 text-sm">{error}</p>
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

												<div className="flex flex-col">
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

						{/* 2. MIDDLE: 1-Year Contribution Heatmap */}
						<div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-3xl hover:-translate-y-1 hover:border-orange-500/30 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col items-center w-full min-h-[200px]">
							<h3 className="text-sm font-semibold text-gray-400 mb-6 self-start w-full">Contributions Heatmap (1 Year)</h3>

							<div className="w-full overflow-x-auto pb-4 custom-scrollbar flex justify-center">
								<img
									src={`https://ghchart.rshah.org/ea580c/${githubUsername}`}
									alt="GitHub 1-Year Heatmap"
									className="min-w-[800px] w-full max-w-[1000px] h-auto invert hue-rotate-180 opacity-80 contrast-125 hover:opacity-100 transition-all"
								/>
							</div>
						</div>

						{/* 3. BOTTOM: 4-Column Stats Cards Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

							{/* Card 1: Main Stats */}
							<div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-3xl hover:-translate-y-1 hover:border-orange-500/30 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex justify-center items-center w-full min-h-[160px]">
								<img
									src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=f97316&text_color=9ca3af&icon_color=ef4444&cache_seconds=86400`}
									alt="GitHub Stats"
									className="w-full h-auto object-contain max-w-[350px]"
								/>
							</div>

							{/* Card 2: Top Languages */}
							<div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-3xl hover:-translate-y-1 hover:border-red-500/30 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex justify-center items-center w-full min-h-[160px]">
								<img
									src={`https://github-readme-stats.vercel.app/api/top-langs?username=${githubUsername}&layout=compact&langs_count=5&theme=transparent&hide_border=true&title_color=f97316&text_color=9ca3af&icon_color=ef4444&cache_seconds=86400`}
									alt="Top Languages"
									className="w-full h-auto object-contain max-w-[350px]"
								/>
							</div>

							{/* Card 3: Streak (Updated to more stable demolab instance) */}
							<div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-3xl hover:-translate-y-1 hover:border-orange-500/30 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex justify-center items-center w-full min-h-[160px]">
								<img
									src={`https://streak-stats.demolab.com/?user=${githubUsername}&theme=transparent&hide_border=true&ring=f97316&fire=ef4444&currStreakLabel=9ca3af&currStreakNum=ffffff&sideNums=ffffff&sideLabels=9ca3af&dates=9ca3af`}
									alt="Streak Stats"
									className="w-full h-auto object-contain max-w-[350px]"
								/>
							</div>

							{/* Card 4: GitHub Trophies */}
							<div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-3xl hover:-translate-y-1 hover:border-red-500/30 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex justify-center items-center w-full min-h-[160px]">
								<img
									src={`https://github-profile-trophy.vercel.app/?username=${githubUsername}&theme=dracula&no-bg=true&no-frame=true&margin-w=15&column=3`}
									alt="GitHub Trophies"
									className="w-full h-auto object-contain max-w-[350px] opacity-90 hover:opacity-100 transition-opacity"
								/>
							</div>

						</div>

					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};

