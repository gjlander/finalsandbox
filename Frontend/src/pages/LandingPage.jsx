import {
    Image,
    Card,
    CardBody,
    CardHeader,
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Button,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
// import exampleBattle from "../assets/ExampleBattle.png";
import { getHeader } from "../lib/dbClient";
import { useEffect, useState } from "react";

const LandingPage = () => {
    const navigate = useNavigate();
    const [myHeader, setMyHeader] = useState();

    useEffect(() => {
        getHeader()
            .then((header) => {
                // console.log(header[0].header);
                setMyHeader(header[0].header);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="min-h-screen min-w-screen flex flex-col items-center p-4 gap-8">
            <Image src="https://fontmeme.com/permalink/231105/aa303acd63d14025e61578dd113c010e.png" />
            <Card>
                <CardHeader className="w-full flex  justify-center">
                    <h3 className="text-4xl">
                        {myHeader
                            ? myHeader
                            : "Battle with your favorite Pokemon!"}
                    </h3>
                </CardHeader>
                <CardBody className="flex flex-col items-center">
                    {/* <Image className="mx-auto" src={exampleBattle} /> */}
                    <Button
                        onClick={() => {
                            navigate("/allpokemons");
                        }}
                        size="lg"
                        color="danger"
                        className="m-4"
                    >
                        Choose your pokemon!
                    </Button>
                    <h3 className="text-4xl">Type Effectiveness</h3>
                    <Table isStriped>
                        <TableHeader>
                            <TableColumn>Type</TableColumn>
                            <TableColumn>Strong Against</TableColumn>
                            <TableColumn>Weak Against</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow data-index="0">
                                <TableCell>
                                    <strong>Normal</strong>
                                </TableCell>
                                <TableCell></TableCell>
                                <TableCell>Rock, Ghost, Steel</TableCell>
                            </TableRow>
                            <TableRow data-index="1">
                                <TableCell>
                                    <strong>Fighting</strong>
                                </TableCell>
                                <TableCell>
                                    Normal, Rock, Steel, Ice, Dark
                                </TableCell>
                                <TableCell>
                                    Flying, Poison, Psychic, Bug, Ghost, Fairy
                                </TableCell>
                            </TableRow>
                            <TableRow data-index="2">
                                <TableCell>
                                    <strong>Flying</strong>
                                </TableCell>
                                <TableCell>Fighting, Bug, Grass</TableCell>
                                <TableCell>Rock, Steel, Electric</TableCell>
                            </TableRow>
                            <TableRow data-index="3">
                                <TableCell>
                                    <strong>Poison</strong>
                                </TableCell>
                                <TableCell>Grass, Fairy</TableCell>
                                <TableCell>
                                    Poison, Ground, Rock, Ghost, Steel
                                </TableCell>
                            </TableRow>
                            <TableRow data-index="4">
                                <TableCell>
                                    <strong>Ground</strong>
                                </TableCell>
                                <TableCell>
                                    Poison, Rock, Steel, Fire, Electric
                                </TableCell>
                                <TableCell>Flying, Bug, Grass</TableCell>
                            </TableRow>
                            <TableRow data-index="5">
                                <TableCell>
                                    <strong>Rock</strong>
                                </TableCell>
                                <TableCell>Flying, Bug, Fire, Ice</TableCell>
                                <TableCell>Fighting, Ground, Steel</TableCell>
                            </TableRow>
                            <TableRow data-index="6">
                                <TableCell>
                                    <strong>Bug</strong>
                                </TableCell>
                                <TableCell>Grass, Psychic, Dark</TableCell>
                                <TableCell>
                                    Fighting, Flying, Poison, Ghost, Steel,
                                    Fire, Fairy
                                </TableCell>
                            </TableRow>
                            <TableRow data-index="7">
                                <TableCell>
                                    <strong>Ghost</strong>
                                </TableCell>
                                <TableCell>Ghost, Psychic</TableCell>
                                <TableCell>Normal, Dark</TableCell>
                            </TableRow>
                            <TableRow data-index="8">
                                <TableCell>
                                    <strong>Steel</strong>
                                </TableCell>
                                <TableCell>Rock, Ice, Fairy</TableCell>
                                <TableCell>
                                    Steel, Fire, Water, Electric
                                </TableCell>
                            </TableRow>
                            <TableRow data-index="9">
                                <TableCell>
                                    <strong>Fire</strong>
                                </TableCell>
                                <TableCell>Bug, Steel, Grass, Ice</TableCell>
                                <TableCell>Rock, Fire, Water, Dragon</TableCell>
                            </TableRow>
                            <TableRow data-index="10">
                                <TableCell>
                                    <strong>Water</strong>
                                </TableCell>
                                <TableCell>Ground, Rock, Fire</TableCell>
                                <TableCell>Water, Grass, Dragon</TableCell>
                            </TableRow>
                            <TableRow data-index="11">
                                <TableCell>
                                    <strong>Grass</strong>
                                </TableCell>
                                <TableCell>Ground, Rock, Water</TableCell>
                                <TableCell>
                                    Flying, Poison, Bug, Steel, Fire, Grass,
                                    Dragon
                                </TableCell>
                            </TableRow>
                            <TableRow data-index="12">
                                <TableCell>
                                    <strong>Electric</strong>
                                </TableCell>
                                <TableCell>Flying, Water</TableCell>
                                <TableCell>
                                    Ground, Grass, Electric, Dragon
                                </TableCell>
                            </TableRow>
                            <TableRow data-index="13">
                                <TableCell>
                                    <strong>Psychic</strong>
                                </TableCell>
                                <TableCell>Fighting, Poison</TableCell>
                                <TableCell>Steel, Psychic, Dark</TableCell>
                            </TableRow>
                            <TableRow data-index="14">
                                <TableCell>
                                    <strong>Ice</strong>
                                </TableCell>
                                <TableCell>
                                    Flying, Ground, Grass, Dragon
                                </TableCell>
                                <TableCell>Steel, Fire, Water, Ice</TableCell>
                            </TableRow>
                            <TableRow data-index="15">
                                <TableCell>
                                    <strong>Dragon</strong>
                                </TableCell>
                                <TableCell>Dragon</TableCell>
                                <TableCell>Steel, Fairy</TableCell>
                            </TableRow>
                            <TableRow data-index="16">
                                <TableCell>
                                    <strong>Fairy</strong>
                                </TableCell>
                                <TableCell>Fighting, Dragon, Dark</TableCell>
                                <TableCell>Poison, Steel, Fire</TableCell>
                            </TableRow>
                            <TableRow data-index="17">
                                <TableCell>
                                    <strong>Dark</strong>
                                </TableCell>
                                <TableCell>Ghost, Psychic</TableCell>
                                <TableCell>Fighting, Dark, Fairy</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
};

export default LandingPage;
