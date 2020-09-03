import React from "react"

export const Projects = () => {
  const tech_used = ["Typescript", "NodeJS", "Chai+Mocha"]
  return (
    <section>
      <div className='container'>
        <section id='campus-explorer'>
          <h4> UBC Campus Explorer </h4>
          <p>
            Collaborated on a fullstack web development that allows UBC students
            to do an effective query of metadata from around the campus such as
            courses, prerequistites, past course averages, room scheduling, and
            timetime creation.
          </p>
          <p>
            Data for courses and rooms are preloaded in the form of zip files
            and is validated and stored in JSON format stored in a ./data folder
            for quicker access. Queries generated from UI is passed to the
            backend via REST API which validates the query and returns a proper
            query response.
          </p>
          {tech_used.map((tech) => (
            <span className='skill-card'>{tech}</span>
          ))}
        </section>

        <section id='dns-client'>
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
        </section>
      </div>
    </section>
  )
}
