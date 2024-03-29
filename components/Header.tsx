import React, { useState } from 'react';
import { Input } from "@mantine/core";
import { Paper, Grid, Text, Autocomplete } from "@mantine/core";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { useRouter } from "next/navigation";


export default function Header(props: any) {
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
            w={"80%"}          />
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
