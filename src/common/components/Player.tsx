import { FC } from "react";
import ReactPlayer from "react-player";

import "@/styles/Player.module.css";

interface PlayerProps {
  url: string;
  onEnded: () => void;
}

const Player: FC<PlayerProps> = ({ url, onEnded }) => (
  <ReactPlayer
    url={url}
    className="react-player"
    width="100%"
    height="100%"
    config={{
      youtube: {
        playerVars: {
          rel: 0,
          showinfo: 1,
          modestbranding: 1,
          fs: 0,
          disablekb: 1,
          controls: 1,
          host: "http://www.youtube.com",
        },
      },
    }}
    onEnded={onEnded}
  />
);

export default Player;