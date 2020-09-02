import React, { Component } from "react"
import { Typography } from "antd"
import resume from "./resume.pdf"

const { Title } = Typography
const titleStyle = { fontFamily: "Times New Roman" }
const nameStyle = { color: "#5affe7", fontSize: 50 }
export class Introduction extends Component {
  render() {
    return (
      <section className='introduction'>
        <div className='container'>
          <header>
            <Title style={nameStyle}>Gary Hui</Title>
            <Title style={titleStyle}>Software Developer</Title>
          </header>

          <h3 className='title'> About</h3>
          <p>
            Hi I'm Gary, a recent graduate from the University of British
            Columbia. I'm currently seeking software development opportunites
            where I can utilize my skill set to bring value to organizations
            seeking emerging young talent and value the process of continual
            learning in their developlers. I am excited about broaden my
            knowledge of the vast technologies used in the development industry
            while able to display my growth through building successful and
            useful products for users.
          </p>
          <p>
            My reason for working as a software developer stems from my passion
            of helping people and wanting to make a difference, even a little,
            by helping creating enjoyable experiences and useful products.
          </p>
          <p>
            Throughout university and industry experience, I had the pleasure of
            thinking through puzzle like problems and gaining essential
            experience through building complex applications, assisting in the
            launch of web and mobile applications, and interacting with
            customers through online support. Currently, I'm furthering my depth
            of knowledge in front-end development with React.
          </p>
          <p>
            On my leisure time, I enjoy the competitivenes of playing sports
            such as basketball and tennis and can often find myself looking for
            something interesting to watch on Netflix.
          </p>

          <p>
            You can find my resume{" "}
            <a target='_blank' rel='noopener noreferrer' href={resume}>
              here!
            </a>
          </p>
        </div>
      </section>
    )
  }
}
