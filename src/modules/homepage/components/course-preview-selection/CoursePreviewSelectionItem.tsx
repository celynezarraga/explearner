import React, { FC } from "react";
import { useRouter } from "next/router";
import { CoursePreview } from "../../types/coursePreview";
import { Badge, Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { formatWithComma } from "@/common/utils/numbers";

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
    <Card m={1} maxW='sm' borderRadius={"lg"} height={"325px"} onClick={redirectToCourse} cursor={"pointer"}>
      <CardBody>
        <Image
          src={imageUrl}
          alt={title}
          borderRadius='lg'
        />
        <Stack mt='4' spacing='2'>
          <Heading size='md'>{title}</Heading>
          <Text>{author}</Text>
          <Stack direction={"row"}>
            <Text color='blue.600' fontSize='md'>
              {rating.toFixed(1)}
            </Text>
            <Text color='gray.500' fontSize='sm'>
              {`(${formatWithComma(viewerCount)})`}
            </Text>
          </Stack>
          { isRecommended ? <Badge colorScheme='blue' w={"fit-content"}>Recommended</Badge> : null }
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CoursePreviewSelectionItem;