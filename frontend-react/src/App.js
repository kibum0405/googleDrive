
import './App.css';
import React from 'react';
import TopMenu from './components/TopMenu.js';
import { Grid, Card, CardActions, CardContent, Button, Stack, Typography } from '@mui/material';
import LeftMenu from './components/LeftMenu.js'
import AppsIcon from '@mui/icons-material/Apps';
import { Route, Routes } from "react-router-dom";
import Drive from './components/Drive'
import Index from './components/Index'
import Notification from './components/Notification'
import Video from './components/Video'

class App extends React.Component {
  constructor(props) {
		console.log("App.js")
		super(props);
		this.state = {
			menuFlag: false,
			useComponent: "",
			drawer: true,
			components: [],
			sideBar: true,
        	urlPath: "null",
		}
	}
	componentDidMount () {
		let path = document.location.href.split("#/")
		this.setState({...this.state, urlPath:path[0]});
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick = () => {
		this.setState({
			menuFlag: !this.state.menuFlag,
		})
	}
	handleProps = (name, value) => {
		this.setState({ ...this.state,
			[name]: value,
		})
	}
	changeUrl = () => {
		let path = document.location.href.split("#/")
		console.log("changeUrl", path);
		this.setState({...this.state, urlPath:path[0]});
	}
  render() {
    return (
      <>
        <TopMenu className="top-menu-home-icon"
			handleClick={this.handleClick}
			urlPath={this.state.urlPath}
			handleProps={this.handleProps}
		/>

        <Grid className="app-grid-main" container>
			<Grid item lg={1}>
            <LeftMenu menuFlag={this.state.menuFlag} handleClick={this.handleClick}
							changeUrl={this.changeUrl}/>
			</Grid>
            <Grid item lg={8}>
				{
                    this.state.urlPath?
                    <Routes>
                        <Route path="/drives" element={<Drive />} />
                        <Route path="/indices" element={<Index />} />
                        <Route path="/notifications" element={<Notification />} />
                        <Route path="/videos" element={<Video />} />
                    </Routes>
					:
				    (
					<Stack className="app-stack-style"
						justifyContent="center"
					>
						<Card className="app-card-style"
                            variant="outlined"
                        >
							<CardContent className="app-card-content-style">
								<ul className="app-ul-style">
									<Typography
										component="li"
										align="center"
									>
										<AppsIcon className="app-app-icon-style" />
									</Typography>
								</ul>
							</CardContent>
                            <CardActions>
                                <Button fullWidth={true} color="secondary" variant="outlined"
                                    onClick={this.changeUrl}>
                                Drive
                                </Button>
                            </CardActions>
						</Card>
						<Card className="app-card-style"
                            variant="outlined"
                        >
							<CardContent className="app-card-content-style">
								<ul className="app-ul-style">
									<Typography
										component="li"
										align="center"
									>
										<AppsIcon className="app-app-icon-style" />
									</Typography>
								</ul>
							</CardContent>
                            <CardActions>
                                <Button fullWidth={true} color="secondary" variant="outlined"
                                    onClick={this.changeUrl}>
                                Index
                                </Button>
                            </CardActions>
						</Card>
						<Card className="app-card-style"
                            variant="outlined"
                        >
							<CardContent className="app-card-content-style">
								<ul className="app-ul-style">
									<Typography
										component="li"
										align="center"
									>
										<AppsIcon className="app-app-icon-style" />
									</Typography>
								</ul>
							</CardContent>
                            <CardActions>
                                <Button fullWidth={true} color="secondary" variant="outlined"
                                    onClick={this.changeUrl}>
                                Notification
                                </Button>
                            </CardActions>
						</Card>
						<Card className="app-card-style"
                            variant="outlined"
                        >
							<CardContent className="app-card-content-style">
								<ul className="app-ul-style">
									<Typography
										component="li"
										align="center"
									>
										<AppsIcon className="app-app-icon-style" />
									</Typography>
								</ul>
							</CardContent>
                            <CardActions>
                                <Button fullWidth={true} color="secondary" variant="outlined"
                                    onClick={this.changeUrl}>
                                Video
                                </Button>
                            </CardActions>
						</Card>
					</Stack>
				    )
				}
			</Grid>
        </Grid>
      </>
    );
  }
}

export default App;

