import {
  CardContent,
  CardMedia,
  Grid,
  CardActions,
  Typography,
  Card,
  Button,
} from "@mui/material";

const cards = [
  {
    number: 1,
    source:
      "https://www.investopedia.com/thmb/ilebTtfvaQER39ue8gEkMIpP6MY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Histogram1-92513160f945482e95c1afc81cb5901e.png",
  },
  {
    number: 2,
    source:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Black_cherry_tree_histogram.svg/800px-Black_cherry_tree_histogram.svg.png",
  },
  {
    number: 3,
    source:
      "https://www.statology.org/wp-content/uploads/2020/02/freqHist0.png",
  },
  {
    number: 4,
    source:
      "https://www150.statcan.gc.ca/n1/edu/power-pouvoir/c-g/c-g05-7-1-eng.png",
  },
];

function Cards() {
  return cards.map((card) => (
    <Grid item key={card.number} xs={12}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            16: 9,
            // pt: "56.25%",
          }}
          image={card.source}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Heading
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </Grid>
  ));
}

export default Cards;
