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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Container from "@material-ui/core/Container";

const ITEM_INDEX = "https://raw.githubusercontent.com/bay0/CSGO-skin-ID-dumper/master/item_index.json";
const CSGO_STASH = "https://csgostash.com/weapon/";
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
      const wearfield = parseFloat(document.getElementById(`${weapon.id}-wear-field`).value);
      const seedfield = parseInt(document.getElementById(`${weapon.id}-seed-field`).value);
      const stattrak = document.getElementById(`${weapon.id}-stattrak-checkbox`).checked;
      const ct = document.getElementById(`${weapon.id}-ct-checkbox`).checked;
      const t = document.getElementById(`${weapon.id}-t-checkbox`).checked;
      if(skinfield !== "" && skinfield !== null) {
        let matchSkinId = parseInt(skinfield.match(regex)[0]);
        let skinElement = {
            "dyn_stattrak": stattrak,
            "paintkit": matchSkinId,
            "seed": seedfield,
            "stattrak": -1,
            "weapon": weapon.id,
            "wear": wearfield,
        }
        if(ct) {
          skinSave["CT"]["Skins"].push(skinElement);
        } 
        if(t) {
          skinSave["T"]["Skins"].push(skinElement);
        }
      }
    }
    var a = document.createElement("a");
    var file = new Blob([JSON.stringify(skinSave, null, 2)], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = "Skins";
    a.click();
  }

  weaponCard(id, name, img) {
    return (
      <Grid key={`${id}-grid`} item>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <a style={{color: 'inherit'}} href={`${CSGO_STASH}${name}`} target="_blank" rel="noopener noreferrer">{name}</a> - {id}
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container direction="column" spacing={1}>
              <Grid item container spacing={1}>
                <Grid item container direction="column" xs={6}>
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox id={`${id}-t-checkbox`} defaultChecked inputProps={{ 'aria-label': 'primary checkbox' }} />}
                      label="T"
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox id={`${id}-ct-checkbox`} defaultChecked inputProps={{ 'aria-label': 'primary checkbox' }} />}
                      label="CT"
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox id={`${id}-stattrak-checkbox`} inputProps={{ 'aria-label': 'primary checkbox' }} />}
                      label="StatTrak™"
                    />
                  </Grid>
                </Grid>
                <Grid item>
                  <img height="auto" width="125" src={img} alt={`Weapon - ${name}`} />
                </Grid>
              </Grid>
              <Grid item>
                <TextField fullWidth id={`${id}-seed-field`} defaultValue="0" label="Seed" variant="outlined" />
              </Grid>
              <Grid item>
                <TextField fullWidth id={`${id}-wear-field`} defaultValue="0.00" label="Wear" variant="outlined" />
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
      return this.weaponCard(weapon.id, weapon.name, weapon.img);
    })

    return (
      <Container maxWidth="xl">
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="h4" component="h4" gutterBottom>
              ev0-skin-gen
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={this.saveJson} variant="contained" color="primary" className="save-button">
              Save
            </Button>
          </Grid>
          <Grid item>
            <Typography>
              Made with <span role="img" aria-label="heart">❤️</span> by bay
            </Typography>
          </Grid>
          <Grid item>
            <PacmanLoader size={10} color={"#123abc"} loading={true} />
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center" spacing={2}>
          {weaponCards}
        </Grid>
      </Container>
    )
  }
}
