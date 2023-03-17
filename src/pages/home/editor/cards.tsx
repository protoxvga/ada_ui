import Head from "next/head";

import { useGetSprint } from "hooks/api/useGetSprint";
import { Container } from "@mantine/core";

import CustomLoader from "components/loader/CustomLoader";

import ListWaitingCards from "features/home/editor/cardsApprovalAndEdition";
import { useListParts } from "hooks/api/useListParts";

import { useGetCardList } from "hooks/api/useGetCardList";

const Cards = () => {
    const { data: cards, refetch } = useGetCardList();
    const { data: sprint } = useGetSprint();
    const { data: parts } = useListParts(true);

    return cards && sprint && parts ? (
        <div style={{height: "80%", width: "100%"}}>
            <Head><title>WAP | Cards</title></Head>
            {cards &&
                <Container fluid p={0} m={0} style={{height: "100%", width: "100%"}}>
                    <h1 style={{textAlign: "center"}}>Cards</h1>
                    <h3 style={{textAlign: "center", color: "dimgrey"}}>{sprint.name}</h3>
                    <ListWaitingCards cards={cards} refetch={refetch} parts={parts} />
                </Container>
            }
        </div>
    ) : <CustomLoader />;
}

export default Cards;