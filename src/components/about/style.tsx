import styled from "styled-components";

export const Container = styled.div`
    padding-left: 0px;
    display: flex;
	justify-content: center;
	align-items: center;
    flex-direction: column;
	flex-wrap: wrap;
	min-height: 100vh;
	background: #f3f3f3;

    .subtitle{
        padding: 0;
        margin:0 ;
        padding-bottom: 40px;
        font-size: 35px;
        text-align: center;
    }
    .area-card{
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
.card
{
	position: relative;
	width: 300px;
	height: 400px;
	margin: 20px;
	background: #fff;
	transform-style: preserve-3d;
	transform: perspective(1000px);
	box-shadow: 10px 20px 40px rgba(0,0,0,0.25);
	transition: 1s;
}
.card:hover
{
	transform: translateX(50%);
	
}
.card .imgBox
{
	width: 100%;
	height: 100%;
	position: relative;
	transform-origin: left;
	z-index: 1;
	transform-style: preserve-3d;
	background: #000;
	transition: 1s;
}
.card:hover .imgBox
{
	transform: rotateY(-180deg);
	box-shadow: 10px 20px 40px rgba(0,0,0,0.25);
}
.card .imgBox img
{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	transform-style: preserve-3d;
	backface-visibility: hidden;
}
.card .imgBox img:nth-child(2)
{
	transform: rotateY(180deg);
}
.card .details
{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.card .details .content
{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.card .details h2
{
	text-align: center;
	font-weight: 700;
	line-height: 1em;
}
.card .details h2 span
{
	color: #4187f6;
	font-size: 0.8em;
}
.card .details .content p{
    text-align: center;
}
.card .details .social-icons
{
	position: relative;
	display: flex;
	margin-top: 10px;
}
.card .details .social-icons a
{
	display: inline-block;
	width: 35px;
	height: 35px;
	display: flex;
	margin: 5px;
	font-size: 18px;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	background: #333;
	color: #fff;
	transition: 0.2s;
}
.card .details .social-icons a:hover
{
	background: #4187f6;
}
@media (max-width: 1100px) {
	.area-card{
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

}
@media (max-width: 650px) {
	justify-content: flex-start;
	
	h2.subtitle{
		font-size: 23px;
		margin-top: 40px;
		
	}
.card{
	width: 150px;
	height: 200px;
	margin-bottom: 20px;
}
.card .details{
	padding: 10px;
}
.card .details h2
{
	line-height: 12px;
	font-size: 13px;
	margin: 0;
}
.card .details h2 span
{
	font-size:13px;
}
.card .details .content p{
	font-size: 10px;
}
.card .details .social-icons
{
	margin-top: 0px;
}
.card .details .social-icons a{
	width: 20px;
	height: 20px;
	font-size: 10px;
}
}
`