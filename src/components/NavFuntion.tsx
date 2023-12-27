import styled from "styled-components";
import { getsearchedVideo } from "../api/API";

export const NavFunction = () => {
  return (
    <NavHolder>
      <Navi
        col="d"
        onClick={() => {
          getsearchedVideo("All")
        }}
      >
        All
      </Navi>
      <Navi
      col="1"
        onClick={() => {
          getsearchedVideo("News");
        }}
      >
        News
      </Navi>
      <Navi
        col="d"
        onClick={() => {
          getsearchedVideo("Computer Programming");
        }}
      >
        Computer Programming
      </Navi>
      <Navi
        col="d"
        onClick={()=>{
          getsearchedVideo("AI")
        }}
      >
        AI
      </Navi>
      <Navi
        col="d"
        onClick={()=>{
          getsearchedVideo("Intelligence")
        }}
      >
        Intelligence
      </Navi>
      <Navi
        col="d"
        onClick={() => {
          getsearchedVideo("All");
        }}
      >
        BlockChain
      </Navi>
      <Navi
        col="d"
       onClick={()=>{
        getsearchedVideo("Crowd")
       }}
      >
        Crowd
      </Navi>
      <Navi
        col="d"
        onClick={() => {
          getsearchedVideo("Luxury Vehicle");
        }}
      >
        Luxury Vehicle
      </Navi>
      <Navi
        col="d"
       onClick={()=>{
        getsearchedVideo("Vehicles")
       }}
      >
        Vehicles
      </Navi>
      <Navi
        col="d"
       onClick={()=>{
        getsearchedVideo("Fashion")
       }}
      >
        Fashion
      </Navi>
      <Navi
        col="d"
       onClick={()=>{
        getsearchedVideo("Seria A")
       }}
      >
       Seria A
      </Navi>
    </NavHolder>
  );
};

const NavHolder = styled.div`
  display: flex;
`;

const Navi = styled.div<{ col?: string }>`
  padding: 5px 15px;
  border-radius: 6px;
  background-color: ${({ col }) => (col ? "#f2f2f2" : "black")};
  color: ${({ col }) => (col ? "black" : "white")};
  margin: 0 5px;
  transition: all 350ms;

  &:hover {
    cursor: pointer;
  }
`;
