import {
  Text,
  Paper,
  Grid,
  Button,
  ActionIcon,
  Avatar,
  Autocomplete,
} from "@mantine/core";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { Input } from "@mantine/core";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header(props: any) {
  const [autocompletedata, setAutocompletedata] = useState(Array<string>());
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleQueryChange = (query: string) => {
    props.setQuery(query);
  };
  const setNewAutoCompleteData = async (query: string) => {
    const suggestions = await yt.getSearchSuggestions(query);
    setAutocompletedata(suggestions);
  };
  return (
    <Paper
      shadow="xl"
      radius="lg"
      withBorder
      w={"90%"}
      m={"auto"}
      p={"lg"}
      mt={"lg"}
      mb={"lg"}
    >
      <Grid>
        <Grid.Col span={3}>
          {/*change by viewport size*/}
          <Text
            size="xl"
            fw={700}
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
          >
            <PiYoutubeLogoDuotone
              size={32}
              style={{
                verticalAlign: "bottom",
                marginRight: 8,
                color: "#e83976",
              }}
            />
            The Tube
          </Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <Autocomplete
            size="sm"
            radius="lg"
            placeholder={"検索"}
            w={"80%"}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                location.href = `/?q=${e.currentTarget.value}`;
              }
            }}
            onLoad={
              props.query
                ? (e: any) => (e.currentTarget.value = props.query)
                : undefined
            }
            onChange={(query: string) => {
              setQuery(query);
              if (query.length > 0) {
                setNewAutoCompleteData(query);
              }
            }}
            data={query.length > 0 ? autocompletedata : []}
          />
        </Grid.Col>
        <Grid.Col span={1}>
          <Text size="sm" color="gray" fw={"lighter"} my={"6px"}>
            v 1.1.3
          </Text>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}
