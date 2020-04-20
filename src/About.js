import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h3>About</h3>
      <p>
        A computer is a machine that can be instructed to carry out sequences of
        arithmetic or logical operations automatically via computer programming.
        Modern computers have the ability to follow generalized sets of
        operations, called programs. These programs enable computers to perform
        an extremely wide range of tasks. A "complete" computer including the
        hardware, the operating system (main software), and peripheral equipment
        required and used for "full" operation can be referred to as a computer
        system. This term may as well be used for a group of computers that are
        connected and work together, in particular a computer network or
        computer cluster.
      </p>
      <div className="text-about">
        <p>Images of a computers and parts</p>
      </div>
      <div className="about-images">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/G5_supplying_Wikipedia_via_Gigabit_at_the_Lange_Nacht_der_Wissenschaften_2006_in_Dresden.JPG/800px-G5_supplying_Wikipedia_via_Gigabit_at_the_Lange_Nacht_der_Wissenschaften_2006_in_Dresden.JPG" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/DM_IBM_S360.jpg/1024px-DM_IBM_S360.jpg" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Acorn_BBC_Master_Series_Microcomputer.jpg/800px-Acorn_BBC_Master_Series_Microcomputer.jpg" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Dell_PowerEdge_Servers.jpg/800px-Dell_PowerEdge_Servers.jpg" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/NAMA_Machine_d%27Anticyth%C3%A8re_1.jpg/800px-NAMA_Machine_d%27Anticyth%C3%A8re_1.jpg" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Difference_engine_plate_1853.jpg" />
      </div>
      <Link to="/">
        <i className="fa fa-arrow-circle-o-left"></i>
      </Link>
    </div>
  );
};

export default About;
