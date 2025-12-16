import { GitHubCalendar } from "react-github-calendar";

function GithubHeatmap() {
  return (
    <div>
      <p className="text-sm text-[#ffffff] mb-2">GitHub Contributions</p>

      <GitHubCalendar
        username="ashutoshkrrawat"
        transformData={(data) => data.slice(-150)}
        blockSize={13}
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

      <p className="mt-2 text-xs text-[#eff2f7]">
        Contributions in the last year
      </p>
    </div>
  );
}

export default GithubHeatmap;
