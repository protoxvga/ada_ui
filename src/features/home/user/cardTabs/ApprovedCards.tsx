import { Tabs, Center, Title, SimpleGrid } from "@mantine/core";

import { Card } from "types/apiTypes";

import UserCard from "features/global/cards/UserCard";

interface Props {
    data: Card[];
    refetch: any;
}

const ApprovedCards: React.FC<Props> = ({ data, refetch }) => {
    const filteredCards = data.filter((card: Card) => card.status !== "WAITING_APPROVAL" && card.status !== "REJECTED");

    return (
        <Tabs.Panel value="Approved">
            {filteredCards.length === 0
                ?   <Center mt={100}><Title size={"h3"}>No approved card(s)</Title></Center>
                :   <SimpleGrid
                        mt={20}
                        breakpoints={[
                            { minWidth: 'xs', cols: 1 },
                            { minWidth: 650, cols: 2 },
                            { minWidth: 800, cols: 1 },
                            { minWidth: 910, cols: 2 },
                            { minWidth: 1200, cols: 3 },
                            { minWidth: 1700, cols: 4 },
                            { minWidth: 2200, cols: 5 },
                        ]}
                    >
                        {filteredCards.map((card: Card, index: number) =>
                            <Center key={index} pt={30}>
                                <UserCard card={card} refetch={refetch} edition={false} mode={"status"} />
                            </Center>
                        )}
                    </SimpleGrid>
            }
        </Tabs.Panel>
    );
}

export default ApprovedCards;