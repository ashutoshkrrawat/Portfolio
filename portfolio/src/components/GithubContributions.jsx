import {GitHubCalendar} from "react-github-calendar";

function GithubContributions() {
  return (
    <div className="bg-[#c39494] border border-[#14d6d2]/20 rounded-xl p-6">
      <h3 className="text-xl font-semibold text-[#ffffff] mb-4 text-center">
        GitHub Contributions
      </h3>

      <div className="overflow-x-auto text-white">
        <GitHubCalendar
          username="ashutoshkrrawat"
          blockSize={14}
          blockMargin={4}
          fontSize={14}
          colorScheme="dark"
          theme={{
            dark: [
              "#0b1220", // empty
              "#134e4a",
              "#0f766e",
              "#14b8a6",
              "#5eead4", // most active
            ],
          }}
        />
      </div>
    </div>
  );
}

export default GithubContributions;
