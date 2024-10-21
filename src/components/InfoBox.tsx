import { type FC, type ReactNode } from "react";

interface InfoBoxProps {
  mode: "hint" | "warning";
  children: ReactNode;
}

const InfoBox: FC<InfoBoxProps> = ({ mode, children }) => {
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className="infobox infobox-warning warning--low">
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
