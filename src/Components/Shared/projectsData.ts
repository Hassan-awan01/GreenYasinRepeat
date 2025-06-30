import img1 from '../Images/Services/water.jpg';
import img2 from '../Images/Services/air.jpg';
import img3 from '../Images/Services/noise.jpg';
import img4 from '../Images/Services/soil.jpg';
import img5 from '../Images/img5.jpg';
import img6 from '../Images/img6.jpg';
import img7 from '../Images/img7.jpg';
import img8 from '../Images/img8.jpg';
import img9 from '../Images/img9.jpg';

const BASE_PATH = '/GreenYasin';

const projectsData = [
  {
    category: 'Water Monitoring',
    icon: 'FaWater',
    link: `${BASE_PATH}/services/water-monitoring`,
    mainImage: img1,
    mainDescription: `Water monitoring is crucial for environmental protection and public health. We provide comprehensive services to assess water quality, detect pollutants, and ensure compliance with environmental regulations. Our expertise covers everything from drinking water safety to industrial wastewater management, helping clients maintain sustainable water practices.`,
    examplesHeader: 'Some Examples Of Our Water Monitoring Services:',
    examples: [
      {
        text: 'Detailed analysis of physical, chemical, and biological parameters of water samples.',
      },
      {
        text: 'Identification and quantification of heavy metals, organic pollutants, and pathogens.',
      },
      {
        text: 'Regular monitoring of water sources, treatment plants, and discharge points.',
      },
      {
        text: 'Development and implementation of water quality management plans.',
      },
    ],
    benefitsHeader: 'More Benefits',
    benefits: [
      {
        text: 'Ensures compliance with local and international water quality standards.',
      },
      { text: 'Protects ecosystems and biodiversity from water pollution.' },
      {
        text: 'Safeguards public health by identifying contaminants in drinking water.',
      },
      { text: 'Supports sustainable industrial and agricultural practices.' },
      {
        text: 'Provides data for environmental impact assessments and policy development.',
      },
      {
        text: 'Reduces operational risks and potential penalties for non-compliance.',
      },
    ],
    projects: [
      {
        title: 'Product Water Testing',
        link: '/water/product-testing',
        image: img1,
        description:
          'Comprehensive testing of product water to ensure quality and safety standards.',
        fullDescription:
          'Product water testing involves a detailed analysis of water quality for various industrial and commercial applications. This ensures that the water meets specific purity standards required for manufacturing, processing, or consumption, preventing product contamination and ensuring regulatory compliance.',
        features: [
          'Purity analysis',
          'Contaminant detection',
          'Compliance checks',
          'Microbiological testing',
        ],
        subServiceBenefits: [
          'Ensures product safety',
          'Maintains brand reputation',
          'Reduces operational risks',
          'Meets industry standards',
        ],
        details: [
          'Purity analysis: We conduct rigorous checks to ensure water is free from impurities.',
          'Contaminant detection: Our labs identify and quantify harmful substances.',
          'Compliance checks: We verify adherence to all relevant safety and quality standards.',
          'Microbiological testing: Ensures water is safe from bacterial and viral contamination.',
        ],
      },
      {
        title: 'Waste Water Flow Monitoring',
        link: '/water/waste-flow',
        image: img2,
        description:
          'Monitoring wastewater flow for compliance and environmental impact assessment.',
        fullDescription:
          'Wastewater flow monitoring tracks the volume and rate of wastewater discharge from industrial and municipal sources. This data is essential for assessing environmental impact, optimizing treatment processes, and ensuring adherence to discharge permits and environmental regulations.',
        features: [
          'Real-time flow measurement',
          'Data logging and analysis',
          'Compliance reporting',
          'System optimization',
        ],
        subServiceBenefits: [
          'Optimizes treatment plant efficiency',
          'Prevents regulatory fines',
          'Reduces environmental impact',
          'Supports sustainable water management',
        ],
        details: [
          'Real-time flow measurement: Continuous tracking of wastewater volume and rate.',
          'Data logging and analysis: Comprehensive data collection for performance insights.',
          'Compliance reporting: Automated reports for regulatory adherence.',
          'System optimization: Adjustments to improve efficiency of wastewater treatment.',
        ],
      },
      {
        title: 'Drinking Water Testing',
        link: '/water/drinking',
        image: img3,
        description:
          'Ensuring safe drinking water through rigorous quality and contaminant testing.',
        fullDescription:
          'Drinking water testing involves a thorough examination of water samples to ensure they are safe for human consumption. This includes checking for bacteria, viruses, heavy metals, chemicals, and other contaminants that can pose health risks. Regular testing is vital for public health protection.',
        features: [
          'Pathogen screening',
          'Chemical analysis',
          'Heavy metal detection',
          'Regulatory compliance testing',
        ],
        subServiceBenefits: [
          'Ensures public health safety',
          'Builds consumer trust',
          'Meets health department standards',
          'Provides peace of mind',
        ],
        details: [
          'Pathogen screening: Detection of harmful bacteria and viruses.',
          'Chemical analysis: Identifying chemical contaminants.',
          'Heavy metal detection: Screening for toxic heavy metals.',
          'Regulatory compliance testing: Ensuring water meets all safety standards.',
        ],
      },
      {
        title: 'Water Surface Testing',
        link: '/water/surface',
        image: img4,
        description:
          'Analysis of surface water bodies for ecological health and pollution indicators.',
        fullDescription:
          'Water surface testing assesses the ecological health and pollution levels of natural water bodies like rivers, lakes, and oceans. This involves analyzing physical, chemical, and biological parameters to detect pollution sources, monitor ecosystem health, and support conservation efforts.',
        features: [
          'Ecosystem health assessment',
          'Pollutant identification',
          'Biodiversity impact analysis',
          'Sediment testing',
        ],
        subServiceBenefits: [
          'Protects aquatic ecosystems',
          'Informs conservation strategies',
          'Identifies pollution sources',
          'Supports biodiversity preservation',
        ],
        details: [
          'Ecosystem health assessment: Evaluating overall environmental well-being of water bodies.',
          'Pollutant identification: Pinpointing types and sources of pollutants.',
          'Biodiversity impact analysis: Assessing effects on aquatic life.',
          'Sediment testing: Analyzing bottom sediments for accumulated contaminants.',
        ],
      },
    ],
  },
  {
    category: 'Air Quality Analysis',
    icon: 'FaCloud',
    link: `${BASE_PATH}/services/air-quality-analysis`,
    mainImage: img2,
    mainDescription: `Air quality analysis is vital for understanding and mitigating atmospheric pollution. We offer advanced monitoring and assessment services to identify sources of air pollution, measure pollutant concentrations, and provide strategies for improving air quality. Our services help industries, urban planners, and communities create healthier environments.`,
    examplesHeader: 'Some Examples Of Our Air Quality Analysis Services:',
    examples: [
      {
        text: 'Continuous monitoring of ambient air for particulate matter (PM2.5, PM10) and gaseous pollutants (NOx, SO2, CO, O3).',
      },
      { text: 'Assessment of industrial emissions from stacks and vents.' },
      {
        text: 'Indoor air quality assessments for offices, residential buildings, and public spaces.',
      },
      {
        text: 'Dispersion modeling to predict pollutant concentrations and their impact.',
      },
    ],
    benefitsHeader: 'More Benefits',
    benefits: [
      {
        text: 'Protects human health from respiratory and other pollution-related illnesses.',
      },
      {
        text: 'Ensures compliance with national and international air emission standards.',
      },
      {
        text: 'Supports urban planning for sustainable development and reduced air pollution.',
      },
      {
        text: 'Aids industries in optimizing processes to minimize environmental footprint.',
      },
      {
        text: 'Contributes to climate change mitigation by monitoring greenhouse gases.',
      },
      {
        text: 'Enhances reputation and corporate social responsibility for businesses.',
      },
    ],
    projects: [
      {
        title: 'Vehicle Emission Analysis',
        link: '/air/vehicle-emission',
        image: img5,
        description:
          'Assessing vehicle emissions to ensure compliance with air quality regulations.',
        fullDescription:
          'Vehicle emission analysis involves testing exhaust gases from vehicles to measure pollutants like carbon monoxide, hydrocarbons, and nitrogen oxides. This is crucial for regulatory compliance, environmental protection, and ensuring roadworthiness, contributing to cleaner urban air.',
        features: [
          'Exhaust gas measurement',
          'Pollutant identification',
          'Compliance checks',
          'Engine diagnostics',
        ],
        subServiceBenefits: [
          'Reduces urban air pollution',
          'Ensures vehicle regulatory compliance',
          'Improves public health',
          'Supports sustainable transportation',
        ],
        details: [
          'Exhaust gas measurement: Precise analysis of vehicle exhaust components.',
          'Pollutant identification: Pinpointing harmful substances in emissions.',
          'Compliance checks: Ensuring adherence to emission standards.',
          'Engine diagnostics: Identifying issues affecting emission performance.',
        ],
      },
      {
        title: 'Weather Monitoring',
        link: '/air/weather',
        image: img6,
        description:
          'Real-time weather monitoring for environmental impact and climate studies.',
        fullDescription:
          'Weather monitoring involves continuously collecting meteorological data such as temperature, humidity, wind speed, and precipitation. This data is essential for climate studies, disaster preparedness, environmental impact assessments, and optimizing operations in various industries.',
        features: [
          'Real-time data collection',
          'Climate trend analysis',
          'Storm prediction',
          'Agricultural weather forecasting',
        ],
        subServiceBenefits: [
          'Aids in disaster preparedness',
          'Supports climate research',
          'Optimizes outdoor operations',
          'Enhances environmental impact assessments',
        ],
        details: [
          'Real-time data collection: Continuous monitoring of meteorological parameters.',
          'Climate trend analysis: Studying long-term weather patterns.',
          'Storm prediction: Forecasting severe weather events for preparedness.',
          'Agricultural weather forecasting: Tailored forecasts for farming.',
        ],
      },
      {
        title: 'Ambient Air Quality Monitoring',
        link: '/air/ambient',
        image: img7,
        description:
          'Continuous monitoring of outdoor air quality for public health and environmental protection.',
        fullDescription:
          'Ambient air quality monitoring involves systematically measuring the concentration of pollutants in outdoor air. This provides critical data on pollution levels, trends, and sources, informing public health advisories, regulatory actions, and long-term environmental strategies.',
        features: [
          'Pollutant concentration measurement',
          'Data analysis and reporting',
          'Source apportionment',
          'Compliance with air quality standards',
        ],
        subServiceBenefits: [
          'Protects public health from air pollution',
          'Informs environmental policy',
          'Identifies pollution hotspots',
          'Supports clean air initiatives',
        ],
        details: [
          'Pollutant concentration measurement: Precise measurement of air contaminants.',
          'Data analysis and reporting: Interpreting data for actionable insights.',
          'Source apportionment: Identifying pollution sources.',
          'Compliance with air quality standards: Ensuring adherence to regulations.',
        ],
      },
      {
        title: 'Indoor Air Quality Monitoring',
        link: '/air/indoor',
        image: img8,
        description:
          'Evaluating indoor air quality to ensure a healthy and safe environment.',
        fullDescription:
          'Indoor air quality (IAQ) monitoring assesses the air within buildings for pollutants like VOCs, mold spores, carbon monoxide, and radon. Good IAQ is vital for occupant health, comfort, and productivity, and our services help identify and mitigate potential indoor air hazards.',
        features: [
          'VOC detection',
          'Mold and allergen testing',
          'Carbon monoxide monitoring',
          'Radon detection',
        ],
        subServiceBenefits: [
          'Improves occupant health and comfort',
          'Enhances workplace productivity',
          'Reduces sick building syndrome risks',
          'Ensures compliance with health guidelines',
        ],
        details: [
          'VOC detection: Identifying volatile organic compounds.',
          'Mold and allergen testing: Screening for indoor biological contaminants.',
          'Carbon monoxide monitoring: Ensuring safety from CO leaks.',
          'Radon detection: Testing for radioactive gas.',
        ],
      },
    ],
  },
  {
    category: 'Noise & Hygiene',
    icon: 'FaHeadphonesAlt',
    link: `${BASE_PATH}/services/noise-hygiene`,
    mainImage: img3,
    mainDescription: `Noise and occupational hygiene monitoring are essential for ensuring a safe and healthy working environment. We measure noise levels, assess workplace hazards, and provide solutions to mitigate risks, protecting employees from long-term health issues and ensuring regulatory compliance.`,
    examplesHeader: 'Some Examples Of Our Noise & Hygiene Services:',
    examples: [
      {
        text: 'Measurement and assessment of noise levels in industrial and urban areas.',
      },
      {
        text: 'Monitoring of workplace air for chemical contaminants, dust, and fumes.',
      },
      {
        text: 'Assessment of illumination levels and thermal comfort in various settings.',
      },
      {
        text: 'Development of noise control strategies and personal protective equipment recommendations.',
      },
    ],
    benefitsHeader: 'More Benefits',
    benefits: [
      {
        text: 'Prevents hearing loss and other noise-induced health problems.',
      },
      {
        text: 'Ensures compliance with occupational health and safety regulations.',
      },
      { text: 'Improves employee well-being and productivity.' },
      { text: 'Reduces the risk of workplace accidents and illnesses.' },
      {
        text: 'Identifies potential hazards before they lead to serious health issues.',
      },
      { text: 'Contributes to a positive and responsible corporate image.' },
    ],
    projects: [
      {
        title: 'Noise Level Monitoring',
        link: '/noise/level',
        image: img2,
        description:
          'Measuring noise levels to mitigate impact on human health and wildlife.',
        fullDescription:
          'Noise level monitoring involves quantifying sound levels in various environments to assess their impact on human health and wildlife. Our services help identify excessive noise sources, evaluate compliance with regulations, and develop strategies for noise reduction, ensuring a quieter and safer environment.',
        features: [
          'Real-time noise measurement',
          'Long-term data logging',
          'Noise source identification',
          'Impact assessment',
        ],
        subServiceBenefits: [
          'Protects hearing health',
          'Reduces community annoyance',
          'Ensures regulatory compliance',
          'Supports urban planning for quieter zones',
        ],
        details: [
          'Real-time noise measurement: Continuous monitoring of sound levels.',
          'Long-term data logging: Recording noise data over time for trend analysis.',
          'Noise source identification: Pinpointing sources of excessive noise.',
          'Impact assessment: Evaluating the effects of noise on health and environment.',
        ],
      },
      {
        title: 'Occupational Hygiene Monitoring',
        link: '/noise/hygiene',
        image: img3,
        description:
          'Assessing workplace hazards to ensure employee health and safety.',
        fullDescription:
          'Occupational hygiene monitoring assesses potential health hazards in the workplace, such as exposure to chemicals, dust, noise, and radiation. Our services help identify risks, recommend control measures, and ensure compliance with occupational health and safety standards, protecting worker well-being.',
        features: [
          'Chemical exposure assessment',
          'Dust and particulate monitoring',
          'Noise exposure assessment',
          'Ergonomic evaluations',
        ],
        subServiceBenefits: [
          'Safeguards employee health',
          'Prevents occupational diseases',
          'Enhances workplace safety culture',
          'Ensures regulatory compliance',
        ],
        details: [
          'Chemical exposure assessment: Measuring airborne chemical concentrations.',
          'Dust and particulate monitoring: Analyzing dust levels and composition.',
          'Noise exposure assessment: Evaluating worker exposure to noise.',
          'Ergonomic evaluations: Assessing workplace design for comfort and safety.',
        ],
      },
      {
        title: 'Medical Analysis',
        link: '/noise/medical',
        image: img4,
        description:
          'Conducting medical analyses for environmental health assessments.',
        fullDescription:
          'Medical analysis in an environmental context involves biological testing to assess human exposure to environmental pollutants and their health effects. This can include blood, urine, or hair analysis to detect toxins, heavy metals, or indicators of pollution-related health issues.',
        features: [
          'Biomonitoring for toxins',
          'Heavy metal screening',
          'Allergen testing',
          'Health risk assessment',
        ],
        subServiceBenefits: [
          'Identifies pollution exposure',
          'Assesses health impacts',
          'Informs medical interventions',
          'Supports environmental health studies',
        ],
        details: [
          'Biomonitoring for toxins: Detecting environmental toxins in biological samples.',
          'Heavy metal screening: Analyzing for heavy metal accumulation.',
          'Allergen testing: Identifying environmental allergens.',
          'Health risk assessment: Evaluating potential health risks from exposure.',
        ],
      },
      {
        title: 'Illumination Level Monitoring',
        link: '/noise/illumination',
        image: img5,
        description:
          'Monitoring lighting conditions to ensure optimal visibility and energy efficiency.',
        fullDescription:
          'Illumination level monitoring measures light intensity and distribution in workplaces, public spaces, and residential areas. Proper lighting is crucial for visibility, safety, and productivity, and our services help optimize lighting conditions for comfort and energy efficiency.',
        features: [
          'Light intensity measurement',
          'Uniformity assessment',
          'Glare evaluation',
          'Energy efficiency recommendations',
        ],
        subServiceBenefits: [
          'Improves visual comfort and safety',
          'Enhances productivity',
          'Reduces eye strain',
          'Optimizes energy consumption',
        ],
        details: [
          'Light intensity measurement: Quantifying brightness levels.',
          'Uniformity assessment: Ensuring even light distribution.',
          'Glare evaluation: Identifying and mitigating uncomfortable glare.',
          'Energy efficiency recommendations: Advising on energy-saving lighting solutions.',
        ],
      },
    ],
  },
  {
    category: 'Soil Testing',
    icon: 'FaLeaf',
    link: `${BASE_PATH}/services/soil-testing`,
    mainImage: img4,
    mainDescription: `Soil testing is fundamental for agricultural productivity, environmental remediation, and construction projects. We conduct comprehensive analyses of soil composition, nutrient levels, and contaminant presence, providing insights crucial for sustainable land management and informed decision-making.`,
    examplesHeader: 'Some Examples Of Our Soil Testing Services:',
    examples: [
      {
        text: 'Chemical analysis to determine pH, nutrient content, and organic matter.',
      },
      {
        text: 'Detection and quantification of heavy metals, pesticides, and other pollutants.',
      },
      {
        text: 'Geotechnical analysis for construction and stability assessments.',
      },
      {
        text: 'Recommendations for soil amendment, fertilization, and remediation strategies.',
      },
    ],
    benefitsHeader: 'More Benefits',
    benefits: [
      {
        text: 'Optimizes agricultural yields by providing precise nutrient recommendations.',
      },
      {
        text: 'Identifies contaminated sites for effective remediation planning.',
      },
      { text: 'Ensures structural integrity for construction projects.' },
      { text: 'Promotes sustainable land use and prevents soil degradation.' },
      {
        text: 'Aids in waste management by assessing sludge and compost for safe application.',
      },
      {
        text: 'Supports environmental impact assessments for land development.',
      },
    ],
    projects: [
      {
        title: 'Soil Analysis',
        link: '/soil/analysis',
        image: img6,
        description:
          'Detailed analysis of soil composition, nutrients, and contaminants.',
        fullDescription:
          'Soil analysis involves a comprehensive examination of soil properties, including its physical, chemical, and biological characteristics. This provides critical data for agricultural planning, environmental assessments, and remediation projects, ensuring sustainable land use and healthy ecosystems.',
        features: [
          'Nutrient content analysis',
          'pH and organic matter assessment',
          'Heavy metal screening',
          'Microbial activity analysis',
        ],
        subServiceBenefits: [
          'Optimizes crop growth and yield',
          'Identifies soil health issues',
          'Informs sustainable farming practices',
          'Supports environmental site assessments',
        ],
        details: [
          'Nutrient content analysis: Determining essential plant nutrients in soil.',
          'pH and organic matter assessment: Evaluating soil acidity/alkalinity and organic carbon levels.',
          'Heavy metal screening: Detecting presence of toxic heavy metals.',
          'Microbial activity analysis: Assessing beneficial microbial populations.',
        ],
      },
      {
        title: 'Sludge Testing',
        link: '/soil/sludge',
        image: img7,
        description:
          'Testing sludge for safe disposal and potential resource recovery.',
        fullDescription:
          'Sludge testing analyzes the composition of sludge from wastewater treatment plants or industrial processes. This is crucial for determining safe disposal methods, potential for reuse (e.g., as fertilizer), and compliance with environmental regulations, promoting waste-to-resource strategies.',
        features: [
          'Heavy metal analysis',
          'Pathogen screening',
          'Nutrient content',
          'Moisture and organic matter',
        ],
        subServiceBenefits: [
          'Ensures safe waste disposal',
          'Identifies resource recovery opportunities',
          'Supports regulatory compliance',
          'Reduces environmental contamination risk',
        ],
        details: [
          'Heavy metal analysis: Screening for toxic metals in sludge.',
          'Pathogen screening: Detecting harmful microorganisms.',
          'Nutrient content: Assessing nutrient levels for beneficial reuse.',
          'Moisture and organic matter: Determining physical properties for handling and disposal.',
        ],
      },
      {
        title: 'Compost Analysis',
        link: '/soil/compost',
        image: img8,
        description:
          'Analyzing compost quality for agricultural and environmental applications.',
        fullDescription:
          'Compost analysis evaluates the quality, maturity, and safety of composted organic materials. This testing ensures the compost is suitable for its intended use, whether in agriculture, landscaping, or remediation, promoting sustainable waste management and soil enrichment.',
        features: [
          'Nutrient content',
          'pH and salinity',
          'Maturity indicators',
          'Pathogen screening',
        ],
        subServiceBenefits: [
          'Ensures high-quality soil amendments',
          'Supports organic farming practices',
          'Reduces reliance on chemical fertilizers',
          'Promotes circular economy principles',
        ],
        details: [
          'Nutrient content: Analyzing essential nutrients for plant growth.',
          'pH and salinity: Evaluating acidity/alkalinity and salt levels.',
          'Maturity indicators: Assessing compost stability and suitability.',
          'Pathogen screening: Ensuring compost is free from harmful pathogens.',
        ],
      },
      {
        title: 'Soil Testing Methods',
        link: '/soil/methods',
        image: img9,
        description:
          'Providing comprehensive soil testing methods for various environmental projects.',
        fullDescription:
          'We offer a range of advanced soil testing methods tailored to specific project needs, from agricultural land assessment to contaminated site investigation. Our methodologies ensure accurate and reliable data for informed decision-making in environmental management and land development.',
        features: [
          'On-site sampling and analysis',
          'Laboratory-based testing',
          'Customized testing protocols',
          'Data interpretation and reporting',
        ],
        subServiceBenefits: [
          'Provides accurate data for informed decisions',
          'Tailored to specific project requirements',
          'Ensures regulatory compliance',
          'Supports sustainable land management',
        ],
        details: [
          'On-site sampling and analysis: Immediate data collection and initial assessment.',
          'Laboratory-based testing: Detailed analysis using advanced instruments.',
          'Customized testing protocols: Tailoring methods to specific project requirements.',
          'Data interpretation and reporting: Providing clear, actionable insights from results.',
        ],
      },
    ],
  },
];

import {
  FaFlask,
  FaLeaf,
  FaAward,
  FaIndustry,
  FaFilter,
  FaHammer,
  FaHardHat,
  FaRecycle,
  FaBook,
  FaMapMarkedAlt,
} from 'react-icons/fa';

// ✅ Define iconComponents here or export it separately
export const iconComponents = {
  FaFlask,
  FaLeaf,
  FaAward,
  FaIndustry,
  FaFilter,
  FaHammer,
  FaHardHat,
  FaRecycle,
  FaBook,
  FaMapMarkedAlt,
};

export type IconKey = keyof typeof iconComponents;

// ✅ Service item type
export interface ServiceItem {
  title: string;
  icon: IconKey; // only accepts keys from iconComponents
  link: string;
}

export const servicesData: ServiceItem[] = [
  {
    title: 'Environmental Laboratory',
    icon: 'FaFlask',
    link: `${BASE_PATH}/services/environmental-laboratory`,
  },
  {
    title: 'Environmental Studies & Audit',
    icon: 'FaLeaf',
    link: `${BASE_PATH}/services/environmental-studies-audit`,
  },
  {
    title: 'Certifications',
    icon: 'FaAward',
    link: `${BASE_PATH}/services/certifications`,
  },
  {
    title: 'Cleaner Production Techniques',
    icon: 'FaIndustry',
    link: `${BASE_PATH}/services/cleaner-production-techniques`,
  },
  {
    title: 'Pollution Abatement Technologies',
    icon: 'FaFilter',
    link: `${BASE_PATH}/services/pollution-abatement-technologies`,
  },
  {
    title: 'Geo-Technical Investigations',
    icon: 'FaHammer',
    link: `${BASE_PATH}/services/geo-technical-investigations`,
  },
  {
    title: 'Occupational Health & Safety',
    icon: 'FaHardHat',
    link: `${BASE_PATH}/services/occupational-health-safety`,
  },
  {
    title: 'Waste Management & Disposal',
    icon: 'FaRecycle',
    link: `${BASE_PATH}/services/waste-management-disposal`,
  },
  {
    title: 'Applied Research and Trainings',
    icon: 'FaBook',
    link: `${BASE_PATH}/services/applied-research-trainings`,
  },
  {
    title: 'Geographical Mapping & Surveying',
    icon: 'FaMapMarkedAlt',
    link: `${BASE_PATH}/services/geographical-mapping-surveying`,
  },
];

// ❌ REMOVE this line unless you are exporting a separate variable named `projectsData`
// export default projectsData; ✅ Remove or correct it

export default projectsData;
