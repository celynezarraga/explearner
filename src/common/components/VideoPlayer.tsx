import React, { FC } from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Player from "./Player";

interface VideoPlayerProps {
  playingIndex: number;
  videoList: string[];
  updateIndex: (index: number) => void;
  onEnded: () => void;
  width?: string;
  height?: string;
  showArrows?: boolean;
  colorScheme?: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({
  playingIndex,
  videoList,
  updateIndex,
  onEnded,
  width,
  height,
  showArrows = true,
  colorScheme
}) => {

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const onPreviousHandler = () => {
    updateIndex(playingIndex - 1);
  };

  const onNextHandler = () => {
    updateIndex(playingIndex + 1);
  };

  return (
    <Box position={"relative"} height={height ?? "500px"} width={width ?? "1080px"} overflow={"hidden"}>
      {
        showArrows &&
        <>
          {
            (playingIndex !== 0) &&
            <IconButton
              aria-label="left-arrow"
              colorScheme={colorScheme ?? "gray"}
              borderRadius="full"
              position="absolute"
              left={side}
              top={top}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={onPreviousHandler}>
              <BiLeftArrowAlt />
            </IconButton>
          }
          {
            (playingIndex !== videoList.length - 1) &&
            <IconButton
              aria-label="right-arrow"
              colorScheme={colorScheme ?? "gray"}
              borderRadius="full"
              position="absolute"
              right={side}
              top={top}
              transform={"translate(0%, -50%)"}
              zIndex={2}
              onClick={onNextHandler}>
              <BiRightArrowAlt />
            </IconButton>
          }
        </>
      }
      <Player url={videoList[playingIndex]} onEnded={onEnded}/>
    </Box>
  );
};

export default VideoPlayer;