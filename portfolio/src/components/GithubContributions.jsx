import { GitHubCalendar } from "react-github-calendar";

function GithubHeatmap() {
  return (
    <div
      className="
        rgh-wrapper
        text-white
      "
      style={{
        "--rgh-text-color": "#e5e7eb",
        "--rgh-label-color": "#9ca3af",
        "--rgh-legend-color": "#9ca3af",
      }}
    >
      <p className="text-sm text-white mb-2">GitHub Contributions</p>

      <GitHubCalendar
        username="ashutoshkrrawat"
        transformData={(data) => data.slice(-140)}
        blockSize={14}
        blockMargin={2}
        fontSize={12}
        colorScheme="dark"
        theme={{
          dark: [
            "#0b1220",
            "#134e4a",
            "#0f766e",
            "#14b8a6",
            "#5eead4",
          ],
        }}
      />

      <p className="mt-2 text-xs text-gray-400">
        Contributions in the last year
      </p>
    </div>
  );
}

export default GithubHeatmap;
