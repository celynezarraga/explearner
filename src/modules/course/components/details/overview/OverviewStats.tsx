import React, { FC } from "react";
import { Box, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";
import { Overview } from "@/modules/course/types/course";
import { formatWithComma } from "@/common/utils/numbers";
import { formatStringArrayToString } from "@/common/utils/strings";

interface OverviewStatsProps {
  stats: Overview;
}

const OverviewStats: FC<OverviewStatsProps> = ({ stats }) => {
  const { skillLevel, learnersCount, language, captions  } = stats;

  return (
    <Box maxWidth={"lg"}>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
            <Tr>
              <Td>Skill Level</Td>
              <Td>{skillLevel}</Td>
            </Tr>
            <Tr>
              <Td>Learners Count</Td>
              <Td>{formatWithComma(learnersCount)}</Td>
            </Tr>
            <Tr>
              <Td>Languages</Td>
              <Td>{formatStringArrayToString(language)}</Td>
            </Tr>
            <Tr>
              <Td>Captions</Td>
              <Td>{`${captions ? "Yes" : "No"}`}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OverviewStats;