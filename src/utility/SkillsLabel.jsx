import { useEffect, useState } from "react";

function SkillsLabel(targetLabel) {
  const [label, setLabel] = useState(0);

  useEffect(() => {
    let interval = null;
    if (label < targetLabel) {
      interval = setInterval(() => {
        setLabel((prevLabel) => {
          if (prevLabel >= targetLabel) {
            clearInterval(interval);
            return prevLabel;
          }
          return prevLabel + 1;
        });
      }, 20); // Update interval in milliseconds
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [label, targetLabel]);

  return label;
}

export { SkillsLabel };
