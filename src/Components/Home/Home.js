import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import style from "./style";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import axios from 'axios';
import CircularProgress from "@material-ui/core/CircularProgress";

class Home extends Component {

    constructor() {
        super();
        this.state={
            value: [100, 300],
            veg: true,
            nonVeg: false,
            pizzaBase: null,
            pizzaType: null,
            vegPizzaArray: [],
            nonVegPizzaArray: [],
            isLoading: false,
        }
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        });
    };

    handleChangeDropDowns = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        if(event.target.name === "pizzaBase"){
            axios.get('/pizza/all/crust', { params: { base: event.target.value , type: this.state.pizzaType }}).then(response => {
                if (response.status === 200){
                    this.setState({
                        isLoading: false,
                        vegPizzaArray: response.data.veg,
                        nonVegPizzaArray: response.data.nonVeg,
                    })
                }
            });
        }
        if(event.target.name === "pizzaType"){
            axios.get('/pizza/all/type', { params: { base: this.state.pizzaBase , type: event.target.value }}).then(response => {
                if (response.status === 200){
                    this.setState({
                        isLoading: false,
                        vegPizzaArray: response.data.veg,
                        nonVegPizzaArray: response.data.nonVeg,
                    })
                }
            });
        }
        if (event.target.name === "pizzaBase" && event.target.value === null){
            axios.get('/pizza/all', { params: { base: null, type: null }}).then(response => {
                if (response.status === 200){
                    this.setState({
                        isLoading: false,
                        vegPizzaArray: response.data.veg,
                        nonVegPizzaArray: response.data.nonVeg,
                    })
                }
            });
        }
        if (event.target.name === "pizzaType" && event.target.value === null){
            axios.get('/pizza/all', { params: { base: null, type: null }}).then(response => {
                if (response.status === 200){
                    this.setState({
                        isLoading: false,
                        vegPizzaArray: response.data.veg,
                        nonVegPizzaArray: response.data.nonVeg,
                    })
                }
            });
        }
    };

    marks = [
        {
            value: 100,
            label: '₹ 100',
        },
        {
            value: 200,
            label: '',
        },
        {
            value: 300,
            label: '',
        },
        {
            value: 400,
            label: '',
        },
        {
            value: 500,
            label: '',
        },
        {
            value: 600,
            label: '₹ 600',
        },
    ];

    valuetext = () => {
        return `₹ ${this.state.value}`;
    };

    setVeg=()=>{
        this.setState({
            veg: true,
            nonVeg: false
        })
    };

    setNonVeg=()=>{
        this.setState({
            veg: false,
            nonVeg: true
        })
    };

    getPizza(base, type) {
        this.setState({
            isLoading: true
        });
        axios.get('/pizza/all', { params: { base: base, type: type }}).then(response => {
            if (response.status === 200){
                this.setState({
                    isLoading: false,
                    vegPizzaArray: response.data.veg,
                    nonVegPizzaArray: response.data.nonVeg,
                })
            }
        });
    }

    componentDidMount() {
        this.getPizza(this.state.pizzaBase, this.state.pizzaType);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <div className={classes.spacer}>
                        </div>
                    </Grid>
                    <Grid item
                          xl={3}
                          lg={3}
                          md={3}
                          xs={12}
                          style={{textAlign:"center"}}
                    >
                        <div className={classes.paddingClass}>
                            <Paper className={classes.paddingClass} style={{padding: '10% 0%'}}>
                                <div className={classes.internalPadding}>
                                    <ButtonGroup size="small" aria-label="small outlined button group">
                                        <Button onClick={this.setVeg} color={this.state.veg ? "primary" : ""}  variant={this.state.veg ? "contained" : "outlined"}>Veg</Button>
                                        <Button onClick={this.setNonVeg}color={this.state.nonVeg ? "primary" : ""}  variant={this.state.nonVeg ? "contained" : "outlined"}>Non-Veg</Button>
                                    </ButtonGroup>
                                </div>
                                <div className={classes.internalPadding}>
                                    <Typography id="range-slider" gutterBottom>
                                        Price Range
                                    </Typography>
                                    <Slider
                                        value={this.state.value}
                                        step={100}
                                        min={100}
                                        max={600}
                                        name={"priceFilter"}
                                        onChange={this.handleChange}
                                        valueLabelDisplay="auto"
                                        aria-labelledby="range-slider"
                                        getAriaValueText={this.valuetext}
                                        style={{width: '70%'}}
                                        marks={this.marks}
                                    />
                                </div>
                                <div className={classes.internalPadding}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Pizza Base</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={this.state.pizzaBase}
                                            name={"pizzaBase"}
                                            onChange={this.handleChangeDropDowns}
                                            label="Pizza Base"
                                        >
                                            <MenuItem value={null}>
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"thin"}>Thin Crust</MenuItem>
                                            <MenuItem value={"regular"}>Regular base</MenuItem>
                                            <MenuItem value={"flat"}>Flat bread</MenuItem>
                                            <MenuItem value={"multigrain"}>Multigrain</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className={classes.internalPadding}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Pizza Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={this.state.pizzaType}
                                            name={"pizzaType"}
                                            onChange={this.handleChangeDropDowns}
                                            label="Pizza Type"
                                        >
                                            <MenuItem value={null}>
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"cheese"}>Cheese burst</MenuItem>
                                            <MenuItem value={"topping"}>Cheese topping</MenuItem>
                                            <MenuItem value={"no"}>No cheese</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </Paper>
                        </div>
                    </Grid>
                    <Grid item
                          xl={9}
                          lg={9}
                          md={8}
                          xs={12}
                    >
                        <div className={classes.paddingClass}>
                            {
                                this.state.isLoading ?
                                    <div style={{textAlign: 'center'}}>
                                        <CircularProgress/>
                                    </div> :
                                    <Paper className={classes.paddingClass}>
                                        {
                                            this.state.veg ?
                                                this.state.vegPizzaArray.length === 0 ?
                                                    <div style={{textAlign: 'center'}}>
                                                        <img
                                                            alt="Select file"
                                                            style={{width:'30%', height: '30%'}}
                                                            src="/emprt.gif"
                                                        />
                                                        <Typography variant={"h5"} gutterBottom>
                                                            No Pizza found for this combination, try something else
                                                        </Typography>
                                                    </div> :
                                                    this.state.vegPizzaArray.map(singlePizza=>
                                                        <div className={classes.internalPaddingOnResult} id={singlePizza.name}>
                                                            <Grid container spacing={3}>
                                                                <Grid item xs={4}>
                                                                    <div style={{textAlign:"center"}}>
                                                                        <img
                                                                            alt="Select file"
                                                                            className={classes.image}
                                                                            src={singlePizza.image}
                                                                        />
                                                                    </div>
                                                                </Grid>
                                                                <Grid item xs={8}>
                                                                    <div className={classes.paper}>
                                                                        <Typography variant={"h5"} gutterBottom>
                                                                            {singlePizza.name}
                                                                        </Typography>
                                                                        <ol style={{listStyleType: "disc"}}>
                                                                            <li >{singlePizza.crust} Crust</li>
                                                                            <li style={{marginTop: '10px'}}>Cheese {singlePizza.cheese}</li>
                                                                            <li style={{marginTop: '10px'}}>{"Veg"}</li>
                                                                        </ol>
                                                                        <Grid container>
                                                                            <Grid item
                                                                                  xl={3}
                                                                                  lg={3}
                                                                                  md={4}
                                                                                  sm={4}
                                                                                  xs={7}
                                                                            >
                                                                                <Typography variant={"h6"} gutterBottom>
                                                                                    ₹ {singlePizza.price}
                                                                                </Typography>
                                                                            </Grid>
                                                                            <Grid item
                                                                                  xl={9}
                                                                                  lg={9}
                                                                                  md={8}
                                                                                  sm={8}
                                                                                  xs={5}
                                                                            >
                                                                                <Button variant={"contained"} color={"primary"}>Add</Button>
                                                                            </Grid>
                                                                        </Grid>
                                                                    </div>
                                                                </Grid>
                                                            </Grid>
                                                            <Divider style={{marginTop: '2%'}} variant="middle" />
                                                        </div>
                                                    ) :
                                                this.state.nonVegPizzaArray.length === 0 ?
                                                    <div style={{textAlign: 'center'}}>
                                                        <img
                                                            alt="Select file"
                                                            style={{width:'30%', height: '30%'}}
                                                            src="/emprt.gif"
                                                        />
                                                        <Typography variant={"h5"} gutterBottom>
                                                            No Pizza found for this combination, try something else
                                                        </Typography>
                                                    </div> :
                                                    this.state.nonVegPizzaArray.map(singlePizza=>
                                                        <div className={classes.internalPaddingOnResult}>
                                                            <Grid container spacing={3}>
                                                                <Grid item xs={4}>
                                                                    <div style={{textAlign:"center"}}>
                                                                        <img
                                                                            alt="Select file"
                                                                            className={classes.image}
                                                                            src={singlePizza.image}
                                                                        />
                                                                    </div>
                                                                </Grid>
                                                                <Grid item xs={8}>
                                                                    <div className={classes.paper}>
                                                                        <Typography variant={"h5"} gutterBottom>
                                                                            {singlePizza.name}
                                                                        </Typography>
                                                                        <ol style={{listStyleType: "disc"}}>
                                                                            <li >{singlePizza.crust} Crust</li>
                                                                            <li style={{marginTop: '10px'}}>Cheese {singlePizza.cheese}</li>
                                                                            <li style={{marginTop: '10px'}}>{"Non-Veg"}</li>
                                                                        </ol>
                                                                        <Grid container>
                                                                            <Grid item
                                                                                  xl={3}
                                                                                  lg={3}
                                                                                  md={4}
                                                                                  sm={4}
                                                                                  xs={7}
                                                                                  >
                                                                                <Typography variant={"h6"} gutterBottom>
                                                                                    ₹ {singlePizza.price}
                                                                                </Typography>
                                                                            </Grid>
                                                                            <Grid item
                                                                                  xl={9}
                                                                                  lg={9}
                                                                                  md={8}
                                                                                  sm={8}
                                                                                  xs={5}
                                                                            >
                                                                                <Button variant={"contained"} color={"primary"}>Add</Button>
                                                                            </Grid>
                                                                        </Grid>
                                                                    </div>
                                                                </Grid>
                                                            </Grid>
                                                            <Divider style={{marginTop: '2%'}} variant="middle" />
                                                        </div>
                                                    )
                                        }
                                    </Paper>
                            }
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(style)(Home);
