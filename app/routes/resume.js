import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return [
    {
      employer: "Colorado Department of Public Health and Environment",
      title: "Oil and Gas Permit Engineer",
      dates: "Oct 2012 to Oct 2014",
      location: "Denver, CO",
      description: [
      "Wrote permits for air quality and pollution limits.",
      "Developed new regulations based on statistical analysis of current operations.",
      "Inspected oil and gas sites as part of random inspections.",
      "Provided technical assistance to oil and gas facility owners and operators.",
      "Interacted with applicants and the public to provide information and guidance and to clarify official policy and procedures pertaining to program goals and AQCC regulation.",
      "Analyzed data to determine types of pollutants emitted and calculate emission levels to determine compliance with federal and State air quality regulations.",
      "Instructed facility owners/operators on how to calculate emissions, fill out required reporting forms and how to keep records in accordance with the applicable air quality regulations.",
      "Provided technical information specific to the site or situation about the use of pollution control equipment and alternative methods of reducing and/or eliminating emissions.",
      "Refered small business owners to technical experts when necessary to provide technical and regulatory information."
      ],
    },

    {
      employer: "CAE Mining",
      title: "Geotechnical Consultant",
      dates: "Aug 2011 to Aug 2012",
      location: "Littleton, CO",
      description: [
      "Gained knowledge of concepts such as block modeling, resource estimation, geologic interpretation and geostatistics.",
      "Consulted for mining companies using CAE software to develop mineral analyses.",
      "Demonstrated timely critical thinking skills while handling customer support issues relating to various software and applications.",
      "Assisted in technical sales support for mining technology solutions."
      ],
    },

    {
      employer: "Sheridan School District",
      title: "Geology Specialist",
      dates: "July 2011 to Aug 2011",
      location: "Sheridan, CO",
      description: [
      "Taught earth science to middle school students during an exploratory summer school program.",
      "Developed lesson plans, activities and a field trip for students."
      ],
    },

    {
      employer: "United States Geological Survey",
      title: "Minerals and Materials Specialist (Internship)",
      dates: "May 2010 to May 2011",
      location: "Golden, CO",
      description: [
      "Analyzed the whole system of materials flow, from source to ultimate disposition, of mineral commodities.",
      "Researched current trends in the world wide mining industry.",
      "Was published in Mining Engineering in 2011 for an article about exploration trends for the year.",
      ],
    }

    ];
  }

});
