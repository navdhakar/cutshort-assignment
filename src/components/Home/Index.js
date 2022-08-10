import React, { useState, useRef } from "react";
import logo_image from "../../assets/eden.jpg";
import check_image from "../../assets/check.png";
import person_image from "../../assets/person.png";
import team_image from "../../assets/team.png";

import Box from "@mui/material/Box";
import {
  Button,
  StepContent,
  Card,
  CardActions,
  CardContent,
  createTheme,
  TextField,
} from "@mui/material";

import Indexstyle from "./Style";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { StepLabel, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
  "viral",
];

function Index() {
  const [form1state, setform1state] = useState(true);
  const [form2state, setform2state] = useState(false);
  const [form3state, setform3state] = useState(false);
  const [form4state, setform4state] = useState(false);
  const [activeState, setactiveState] = useState(1);
  const [Name, setName] = useState("");
  const name = useRef();
  const handleChange = (e) => {
    e.preventDefault(); // prevent the default action
    setName(e.target.value); // set name to e.target.value (event)
  };
  const Form = () => {
    if (form1state) {
      return (
        <>
          <Box className="welcome">
            <h3>Welcome! First things first...</h3>
            <span>You can always change them later</span>
          </Box>
          <Box className="input_name">
            <Typography variant="span">Full Name</Typography>
            <input type="name" placeholder="Steve Jobs" />
          </Box>
          <Box className="input_name">
            <Typography variant="span">Display Name</Typography>
            <input ref={name} type="text" placeholder="Steve" />
          </Box>
          <Box className="create_button">
            <Button
              onClick={() => {
                setName(name.current.value);
                setform1state(false);
                setform2state(true);
                setactiveState(2);
              }}
            >
              Create Workspace
            </Button>
          </Box>
        </>
      );
    } else if (form2state) {
      return (
        <>
          <Box className="welcome">
            <h3>Let's setup a home for all your work</h3>
            <span>You can always change them later</span>
          </Box>
          <Box className="input_name">
            <Typography variant="span">Workspace Name</Typography>
            <input type="name" placeholder="Eden" />
          </Box>
          <Box className="input_name">
            <Typography variant="span">Workspace Url</Typography>
            <input type="name" placeholder="www.eden.com" />
          </Box>
          <Box className="create_button">
            <Button
              onClick={() => {
                setform2state(false);
                setform3state(true);
                setactiveState(3);
              }}
            >
              Create Workspace
            </Button>
          </Box>
        </>
      );
    } else if (form3state) {
      return (
        <>
          <Box className="welcome">
            <h3>How you are planning to use Eden?</h3>
            <span>We'll streamline your setup experience accordingly.</span>
          </Box>
          <Grid container spacing={2} sx={{ marginBottom: 3 }}>
            <Grid item xs={6}>
              <Card variant="outlined">
                <CardContent>
                  <Box className="logo1">
                    <img src={person_image} alt="" style={{ width: 15 }} />
                  </Box>
                  <Typography variant="h6">For myself</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Write better. Think more clearly. Stay organised.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Box className="logo1">
                    <img src={team_image} alt="" style={{ width: 15 }} />
                  </Box>
                  <Typography variant="h6">With my team</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Wkis, docs, tasks and projects, all in one place.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box className="create_button">
            <Button
              onClick={() => {
                setform3state(false);
                setform4state(true);
                setactiveState(4);
              }}
            >
              Create Workspace
            </Button>
          </Box>
        </>
      );
    } else {
      return (
        <>
          <Box className="welcome">
            <Box className="logo text-center">
              <img src={check_image} alt="" style={{ width: 60 }} />
            </Box>
            <h3>Congratulations, {Name}!</h3>
            <span>
              You have completed onboarding, you can start using Eden!
            </span>
          </Box>

          <Box className="create_button">
            <Button>Launch Eden</Button>
          </Box>
        </>
      );
    }
  };

  return (
    <Indexstyle>
      <Box className="main_form">
        <Box className="form_main">
          <Box className="logo text-center">
            <img src={logo_image} alt="" />
          </Box>

          <Stepper activeStep={activeState} alternativeLabel>
            {steps.map((label) => (
              <Step
                key={label}
                sx={{
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: "#664de5", // circle color (COMPLETED)
                  },
                  "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                    {
                      color: "#664de5", // Just text label (COMPLETED)
                    },
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "#664de5", // circle color (ACTIVE)
                  },
                  "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                    {
                      color: "common.white", // Just text label (ACTIVE)
                    },
                  "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "white", // circle's number (ACTIVE)
                  },
                }}
              >
                <StepLabel
                  StepIconProps={{
                    active: {
                      color: "#664de5",
                    },
                  }}
                ></StepLabel>
              </Step>
            ))}
          </Stepper>

          <Form />
        </Box>
      </Box>
    </Indexstyle>
  );
}

export default Index;
