import React, { FC } from "react";
import { useRouter } from "next/router";
import { CoursePreview } from "../../types/coursePreview";
import { Badge, Box, Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { formatWithComma } from "@/common/utils/numbers";
import Rating from "@/common/components/Rating";

interface CoursePreviewSelectionItemProps {
  item: CoursePreview;
}

const CoursePreviewSelectionItem: FC<CoursePreviewSelectionItemProps> = ({
  item
}) => {
  const router = useRouter();
  const { imageUrl, title, author, isRecommended, rating, viewerCount, url } = item;

  const redirectToCourse = () => {
    void router.push(url);
  };

  return (
    <Card m={1} maxW="sm" borderRadius={"lg"} height={"325px"} onClick={redirectToCourse} cursor={"pointer"}>
      <CardBody>
        <Image
          src={imageUrl}
          alt={title}
          borderRadius="lg"
        />
        <Stack mt="4" spacing="2">
          <Heading size="md">{title}</Heading>
          <Text>{author}</Text>
          <Stack direction={"row"}>
            <Box display="flex" alignItems="center">
              <Rating rating={rating}/>
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {`(${formatWithComma(viewerCount)})`}
              </Box>
            </Box>
          </Stack>
          { isRecommended ? <Badge colorScheme="blue" w={"fit-content"}>Recommended</Badge> : null }
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CoursePreviewSelectionItem;