import styled from "styled-components";

export const Container = styled.div`

/*
     .card
{
	max-width: 300px;
	height: 215px;
	background: #fff;
	margin: 30px 10px;
	padding: 20px 15px;
	display: flex;
	border-radius: 4px;
	flex-direction: column;
	box-shadow: 0 5px 20px rgba(0,0,0,0.5);
	transition: 0.3s ease-in-out;
}
 .card:hover
{
	height: 420px;
}
 .card .imgBx
{
	position: relative;
	background: #fff;
	top: -60px;
	left: 20px;
    min-width: initial;
    width: 260px;
    height: 260px;
	border-radius: 4px;
	z-index: 1;
	box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}
 .card .imgBx img
{
	max-width: 100%;
	border-radius: 4px;
}
 .card .content
{
	position: relative;
	margin-top: -140px;
	padding: 10px 15px;
	text-align: center;
	color: #111;
	visibility: hidden;
	opacity: 0;
	transition: 0.3s ease-in-out;
	transition-delay: 0s;
}
 .card:hover .content
{
	visibility: visible;
	opacity: 1;
	margin-top: -40px;
	transition-delay: 0.3s;
}*/
.container {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}

.box {
	position: relative;
	width: 300px;
	height: 300px;
	display: flex;
	margin: 40px;
	justify-content: center;
	align-items: center;
	
}

.imgBx {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 10px;
	box-sizing: border-box;
	color: #fff;
	z-index: 2;
	transition: 0.5s ease-in-out;
	border-radius: 20px;
}

.box:hover .imgBx {
	transform: translate(-35px, -35px);
}

.imgBx img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 10px;
}

.box .content {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #fff;
	display: flex;
	flex-direction:column;
	justify-content: flex-end;
	align-items: center;
	text-align: center;
	transition: 0.5s ease-in-out;
	border-radius: 12px;
}

.box:hover .content {
	transform: translate(35px, 35px);
}

.box .content h2 {
	font-size: 16px;
	color: #111;
	font-weight: 500;
	padding: 0;
	margin: 0;
	margin-bottom: 5px;
}

.box a
{
  background: #fff;
  color: #1886b9;
  padding: 5px 10px;
  text-decoration:  none;
  font-size: 14px;
  font-weight: 500;
  transition: all ease .5s;
  margin-bottom: 10px;
}
.box a:hover{
	background:#1886b9;
	color: #fff;
	box-shadow: 0px 0px 20px #1886b9;
	border-radius: 5px;
}

@media (max-width: 768px) {
	
	.box:hover .imgBx {
		transform: translate(0px, -35px);
	}

	.box:hover .content {
		transform: translate(0px, 35px);
	}
}
@media (max-width: 650px) {
	.box{
		margin: 25px 0;
	}
}
`