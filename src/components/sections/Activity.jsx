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
					`https://api.github.com/users/${githubUsername}/events?per_page=10`
				);
				if (!response.ok) throw new Error("User not found or API limit reached");

				const data = await response.json();
				setActivities(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchGitHubActivity();
	}, [githubUsername]);

	if (loading) {
		return (
			<div className="text-center py-20 text-gray-400">
				Loading GitHub Activity...
			</div>
		);
	}

	return (
		<section
			id="activity"
			className="min-h-screen flex items-center justify-center py-20 relative"
		>
			<RevealOnScroll>
				<div className="max-w-3xl mx-auto px-4 relative z-10">

					<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent text-center">
						Recent Activity
					</h2>

					<div className="rounded-xl p-8 border-white/10 border bg-white/5 backdrop-blur-3xl hover:-translate-y-1 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
						{error ? (
							<p className="text-red-500 text-center">{error}</p>
						) : (
							<div className="space-y-4">
								{activities.map((activity) => (
									<div
										key={activity.id}
										className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(249,115,22,0.1)] transition-all flex justify-between items-center"
									>
										<div className="text-gray-300 text-sm">
											<span className="font-semibold block mb-1">
												{activity.type.replace('Event', '')}
											</span>
											<a
												href={`https://github.com/${activity.repo.name}`}
												target="_blank"
												rel="noopener noreferrer"
												className="text-orange-400 hover:text-orange-300 hover:underline transition-colors"
											>
												{activity.repo.name}
											</a>
										</div>
										<span className="text-xs text-gray-500">
											{new Date(activity.created_at).toLocaleDateString()}
										</span>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};
