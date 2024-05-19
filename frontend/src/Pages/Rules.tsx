import {Typography, Card, CardContent, Box, List, styled} from '@mui/material';
import { ListItem as MuiListItem } from '@mui/material';
import { ToastContainer } from "react-toastify";
import { useRef, useState, useEffect, JSX } from 'react';
import { Button } from '@mui/material';

// @ts-ignore
import background from '../assets/HomeBackground.png';

const GameTypography = styled(Typography)(({theme}) => ({
    color: 'white',
    fontFamily: 'Courier New, monospace',
    fontWeight: 'bold',
    textAlign: 'center',
}));

const GameCard = styled(Card)(({theme}) => ({
    backgroundColor: 'transparent',
    borderRadius: '15px',
    padding: '20px',
    margin: '10px',
    flex: 1,
}));

const StyledBox = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '20px',
    border: '2px solid white',
    padding: '20px',
}));

// @ts-ignore
const StyledButton = styled(Button)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '20px',
    border: '5px solid white',
    padding: '20px',
}));

const createColoredListItem = (color: string) => {
    return styled(MuiListItem)(({theme}) => ({
        color: 'white',
        fontFamily: 'Courier New, monospace',
        fontWeight: 'bold',
        '&::before': {
            content: '""',
            display: 'inline-block',
            width: '20px',
            height: '20px',
            minWidth: '20px',
            minHeight: '20px',
            maxWidth: '20px',
            maxHeight: '20px',
            border: `3px solid ${color}`,
            borderRadius: '50%',
            marginRight: theme.spacing(1),
        },
    }));
};

const ListItemBlue = createColoredListItem('#0078D0');
const ListItemYellow = createColoredListItem('#FFB114');
const ListItemWhite = createColoredListItem('#FFFFFF');
const ListItemGreen = createColoredListItem('#00A651');
const ListItemRed = createColoredListItem('#F0282D');

const createGameCard = (title: string, listItems: JSX.Element[]) => (
    <GameCard>
        <CardContent>
            <StyledBox mb='20px'>
                <Typography variant="h4" style={{
                    color: 'white',
                    fontFamily: 'Courier New, monospace',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>{title}</Typography>
            </StyledBox>
            <StyledBox>
                <List>{listItems}</List>
            </StyledBox>
        </CardContent>
    </GameCard>
);

const Rules = () => {
    const gameCards = [
        createGameCard("Jouer une carte", [
            <ListItemBlue>Le joueur a 3 cartes en main. Il en joue une.</ListItemBlue>,
            <ListItemYellow>Chaque carte a une valeur allant de 1 à 6.</ListItemYellow>,
            <ListItemGreen>Plus la valeur de la carte est grande, plus elle est rare.</ListItemGreen>,
            <ListItemRed>Une carte peut être utilisée pour: Redonner des points à la flamme du joueur ou en enlever à celle d'un autre joueur.</ListItemRed>,
            <ListItemWhite>S'il choisit d'attaquer, le joueur doit choisir une cible parmi les autres joueurs.</ListItemWhite>,
            <ListItemBlue>Après avoir joué, le joueur reçoit une nouvelle carte tirée au hasard.</ListItemBlue>
        ]),
        createGameCard("Défausser une carte", [
            <ListItemBlue>Le joueur peut défausser une carte de sa main.</ListItemBlue>,
            <ListItemYellow>Cette action est utile lorsque le joueur a une carte et qu'il ne veut pas jouer ou lorsqu'il a trop de cartes en main.</ListItemYellow>,
            <ListItemGreen>Après une défausse, le joueur reçoit une nouvelle carte tirée au hasard.</ListItemGreen>,
            <ListItemRed>Le joueur peut ensuite soit jouer la carte immédiatement, soit la garder en main et terminer son tour.</ListItemRed>
        ]),
        createGameCard("Parier", [
            <ListItemBlue>Le mécanisme de pari est au coeur du jeu.</ListItemBlue>,
            <ListItemYellow>Le joueur ne peut demander un pari qu'une seule fois.</ListItemYellow>,
            <ListItemGreen>Lorsqu'il mise, le joueur doit choisir une carte de sa main et il la joue face cachée.</ListItemGreen>,
            <ListItemRed>Une fois que la carte est mise en jeu, une question est posée au joueur.</ListItemRed>,
            <ListItemWhite>Si le joueur gagne le pari : La carte misée est retournée dans la main du joueur, et il peut jouer une nouvelle carte avec la même valeur.</ListItemWhite>,
            <ListItemBlue>Si le joueur perd le pari : La carte misée est défausser et le joueur subit 2 fois la valeur de la carte en dégâts.</ListItemBlue>,
            <ListItemYellow>Lorsqu'un joueur demande un pari, cela ne met pas fin à son tour.</ListItemYellow>
        ])
    ];

    const [autoScroll, setAutoScroll] = useState(false);
    const gameCardsRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAutoScroll(true);
        }, 3000);

        const handleScroll = () => {
            setAutoScroll(true);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (autoScroll && gameCardsRef.current) {
            gameCardsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [autoScroll]);

    return (
        <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
            <ToastContainer />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: 0
            }} />
            <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
                <StyledBox>
                    <GameTypography variant="h1" gutterBottom>Règles</GameTypography>
                    <GameTypography variant="h5" gutterBottom>Chaque joueur attend son tour pour jouer.</GameTypography>
                    <GameTypography variant="h5" gutterBottom>Pendant son tour, le joueur peut effectuer une action parmi :</GameTypography>
                </StyledBox>
                <Box ref={gameCardsRef} display="flex" justifyContent="space-between">
                    {gameCards}
                </Box>
                <Box display="flex" justifyContent="center" mt="20px" mb="20px">
                    <StyledButton variant="contained" onClick={() => history.go(-1)}>Retourner au jeu</StyledButton>
                </Box>
            </Box>
        </div>
    );
};

export default Rules;
