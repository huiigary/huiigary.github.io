import React from "react"

export const Projects = () => {
  const query_tech_used = ["Typescript", "NodeJS", "Chai+Mocha"]
  const dns_tech_used = ["Interet-packet", "Socket-programming", "DNS"]
  return (
    <div id='projects'>
      <section className='container' id='campus-explorer'>
        <h3 className='title'>Projects</h3>
        <h4> UBC Campus Explorer </h4>
        <p>
          Collaborated on a fullstack web development that allows UBC students
          to do an effective query of metadata from around the campus such as
          courses, prerequistites, past course averages, room scheduling, and
          timetime creation.
        </p>
        <p>
          Data for courses and rooms are preloaded in the form of zip files and
          is validated and stored in JSON format stored in a ./data folder for
          quicker access. Queries generated from UI is passed to the backend via
          REST API which validates the query and returns a proper query
          response.
        </p>
        {query_tech_used.map((tech) => (
          <span className='skill-card'>{tech}</span>
        ))}
      </section>

      <section className='container' id='dns-client'>
        <h4>Simple DNS Resolver</h4>
        <p>
          Collaborated on a recursive DNS resolver that given a domain name,
          returns the IP addresses.
        </p>
        <p>
          Required the understanding an internet packet structure and socket
          protocols per RFC for communication and storage of data in a packet.
          The returned packet to is parsed from hex to resolve the data stored
          in the packet.
        </p>
        {dns_tech_used.map((skill) => (
          <span className='skill-card'>{skill}</span>
        ))}
      </section>
    </div>
  )
}
