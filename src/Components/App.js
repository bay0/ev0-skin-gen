import React, { Component } from 'react'
import axios from "axios";
import weapons from "../assets/data/weapons.json";
import PacmanLoader from "react-spinners/PacmanLoader";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";

const ITEM_INDEX = "https://raw.githubusercontent.com/bay0/CSGO-skin-ID-dumper/master/item_index.json";
const regex = /(\d+)[^-]*$/gm;

const initialState = {
  isFetching: true,
  skinData: [],
  setIds: [],
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.fetchData = this.fetchData.bind(this);
    this.weaponCard = this.weaponCard.bind(this);
    this.saveJson = this.saveJson.bind(this);
  }

  async componentDidMount() {
    await this.fetchData();
  }

  fetchData() {
    return axios.get(ITEM_INDEX)
      .then(resp => this.setState({
        isFetching: false,
        skinData: resp.data
      }));
  }

  async saveJson(e) {
    let skinSave = {
      "CT": {
        "Skins": []
      },
      "T": {
        "Skins": []
      }
    };

    for(let i = 0; i < weapons.length; i++) {
      const weapon = weapons[i];
      const skinfield = document.getElementById(`${weapon.id}-skin-field`).value;
      const stattrak = document.getElementById(`${weapon.id}-stattrak-checkbox`).checked;
      if(skinfield !== "" && skinfield !== null) {
        let matchSkinId = skinfield.match(regex)[0]
        let skinElement = {
            "dyn_stattrak": stattrak,
            "paintkit": parseInt(matchSkinId[0]),
            "seed": 0,
            "stattrak": -1,
            "weapon": weapon.id,
            "wear": 0.009999999776482582
        }
        skinSave["CT"]["Skins"].push(skinElement);
        skinSave["T"]["Skins"].push(skinElement);
      }
    }
    var a = document.createElement("a");
    var file = new Blob([JSON.stringify(skinSave, null, 2)], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = "Skins";
    a.click();
  }

  weaponCard(id, name) {
    return (
      <Grid key={`${id}-grid`} item>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {name} - {id}
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container direction="column" spacing={1}>
              {/* <Grid item>
                <TextField label="Wear" variant="outlined" />
              </Grid> */}
              <Grid item>
                StatTrak™
                <Checkbox
                  id={`${id}-stattrak-checkbox`}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </Grid>
              <Grid item>
              <Autocomplete
                id={`${id}-skin-field`}
                options={this.state.skinData}
                style={{ width: 300 }}
                getOptionLabel={(option) => `${option.name} - ${option.id}`}
                renderInput={(params) => <TextField {...params} label="Skin" variant="outlined" />}
              />
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    )
  }

  render() {
    const { isFetching } = this.state;

    if(isFetching) {
      return (
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item>
            <PacmanLoader
              size={150}
              color={"#123abc"}
              loading={isFetching}
            />
          </Grid>
        </Grid>
      )
    }

    let weaponCards = weapons.map(weapon => {
      return this.weaponCard(weapon.id, weapon.name);
    })

    return (
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h4" component="h4" gutterBottom>
              ev0-skin-gen
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={this.saveJson} color="primary" className="save-button" aria-label="edit">
              Save
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center" spacing={2}>
          {weaponCards}
        </Grid>
      </Container>
    )
  }
}
