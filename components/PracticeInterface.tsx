import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BeakerIcon, BookOpenIcon, GraduationCapIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { set } from "date-fns";

const problems = {
  "water-and-hydrogen": [
    {
      id: 1,
      question:
        " What type of bonding is responsible for the high boiling point of water?",
      options: [
        "Ionic bonding",
        "Covalent bonding",
        "Hydrogen bonding",
        "Metallic bonding",
      ],
      correctAnswer: 3,
      explanation:
        "The high boiling point of water is due to strong hydrogen bonding between water molecules.",
    },
    {
      id: 2,
      question:
        "Which method is commonly used to prepare hydrogen gas in the laboratory?",
      options: [
        "Electrolysis of water",
        "Reaction of metals with acids",
        "Fractional distillation of air",
        "Heating ammonium compounds",
      ],
      correctAnswer: 2,
      explanation:
        "Hydrogen gas is commonly prepared by reacting metals like zinc with acids such as hydrochloric acid.",
    },
    {
      id: 3,
      question: "Which of the following is a primary use of hydrogen gas?",
      options: [
        "As a refrigerant",
        "In the synthesis of ammonia",
        "As a food preservative",
        "In the manufacture of glass",
      ],
      correctAnswer: 2,
      explanation:
        "Hydrogen is a key component in the Haber process for synthesizing ammonia.",
    },
  ],
  "intro-to-chemistry": [
    {
      id: 1,
      question:
        "Which of the following is considered the smallest unit of matter?",
      options: ["Molecule", "Atom", "Compound", "Element"],
      correctAnswer: 2,
      explanation:
        "An atom is the basic unit of matter, consisting of protons, neutrons, and electrons.",
    },
    {
      id: 2,
      question: "Who is known as the father of modern chemistry?",
      options: [
        "Isaac Newton",
        "Dmitri Mendeleev",
        "Antoine Lavoisier",
        "John Dalton",
      ],
      correctAnswer: 3,
      explanation:
        "Antoine Lavoisier is known as the father of modern chemistry for his work on the law of conservation of mass.",
    },
    {
      id: 3,
      question: "What is the primary goal of chemistry as a science?",
      options: [
        "To study living organisms",
        "To understand matter and its properties",
        "To explore celestial objects",
        "To design machines",
      ],
      correctAnswer: 2,
      explanation:
        "The main focus of chemistry is to study matter, its composition, and the changes it undergoes.",
    },
  ],
  "states-of-matter": [
    {
      id: 1,
      question: "Which state of matter has a definite shape and volume?",
      options: ["Solid", "Liquid", "Gas", "Plasma"],
      correctAnswer: 1,
      explanation:
        "Solids have a definite shape and volume because their particles are tightly packed and arranged in a fixed pattern.",
    },
    {
      id: 2,
      question: "What happens during the process of condensation?",
      options: [
        "Solid changes to liquid",
        "Gas changes to liquid",
        "Liquid changes to solid",
        "Liquid changes to gas",
      ],
      correctAnswer: 2,
      explanation:
        "Condensation is the process where a gas changes into a liquid when cooled.",
    },
    {
      id: 3,
      question:
        "Which state of matter is characterized by particles moving freely and filling the entire container?",
      options: ["Solid", "Liquid", "Gas", "Plasma"],
      correctAnswer: 3,
      explanation:
        "Gases have no fixed shape or volume; their particles move freely and spread to fill the container.",
    },
  ],
  "acids-bases-indicators": [
    {
      id: 1,
      question: "What is the pH of a neutral solution?",
      options: ["0", "7", "14", "10"],
      correctAnswer: 2,
      explanation: "A neutral solution, like pure water, has a pH of 7.",
    },
    {
      id: 2,
      question: "Which of the following is a natural indicator?",
      options: [
        "Phenolphthalein",
        "Litmus",
        "Methyl orange",
        "Universal indicator",
      ],
      correctAnswer: 2,
      explanation: "Litmus is a natural indicator extracted from lichens.",
    },
    {
      id: 3,
      question: "What color does red litmus paper turn in a base?",
      options: ["Red", "Blue", "Green", "Yellow"],
      correctAnswer: 2,
      explanation: "Red litmus paper turns blue in the presence of a base.",
    },
  ],
  "air-and-combustion": [
    {
      id: 1,
      question: "What is the most abundant gas in the Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
      correctAnswer: 2,
      explanation:
        "Nitrogen makes up about 78% of the Earth's atmosphere, making it the most abundant gas.",
    },
    {
      id: 2,
      question: "Which gas is necessary for combustion to occur?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      correctAnswer: 1,
      explanation:
        "Oxygen supports combustion by reacting with fuels to release energy.",
    },
    {
      id: 3,
      question:
        "What is the main product of complete combustion of hydrocarbons?",
      options: ["Carbon monoxide", "Water", "Methane", "Carbon dioxide"],
      correctAnswer: 4,
      explanation:
        "Complete combustion of hydrocarbons produces carbon dioxide and water as the main products.",
    },
  ],
  "the-mole": [
    {
      id: 1,
      question: "What is the value of Avogadro's number?",
      options: ["6.022 x 10^23", "1.602 x 10^-19", "9.81 m/s^2", "3.00 x 10^8"],
      correctAnswer: 1,
      explanation:
        "Avogadro's number represents the number of particles in one mole of a substance.",
    },
    {
      id: 2,
      question: "How many moles are in 18 grams of water (H2O)?",
      options: ["1 mole", "0.5 moles", "2 moles", "1.5 moles"],
      correctAnswer: 1,
      explanation:
        "The molar mass of water is 18 g/mol, so 18 grams equals 1 mole.",
    },
    {
      id: 3,
      question:
        "Which of the following equations is used to calculate moles from mass?",
      options: [
        "Moles = Mass / Molar Mass",
        "Moles = Volume / Molar Volume",
        "Moles = Molar Mass / Mass",
        "Moles = Mass x Molar Volume",
      ],
      correctAnswer: 1,
      explanation:
        "Moles can be calculated by dividing the mass of a substance by its molar mass.",
    },
  ],
  "organic-chemistry-1": [
    {
      id: 1,
      question:
        "Which of the following is the simplest member of organic compounds?",
      options: ["Formic acid", "Formaldehyde", "Methane", "Methanol"],
      correctAnswer: 3,
      explanation:
        "Methane is the simplest member of the alkane family and indeed the simplest of organic compounds, as all other compounds are derived by altering this compound.",
    },
    {
      id: 2,
      question:
        "Which of the following is the known name for the reaction given below?",
      options: [
        "Ullmann reaction",
        "Gabriel phthalimide synthesis",
        "Buchwald-Hartwig Reaction",
        "Chan-Lam coupling",
      ],
      correctAnswer: 3,
      explanation:
        "The Buchwald–Hartwig amination is a chemical reaction used in organic chemistry for the synthesis of carbon–nitrogen bonds via the palladium-catalyzed cross-coupling of amines with aryl halides.",
    },
    {
      id: 3,
      question:
        "Which of the following is yielded when Ethylene glycol is treated with phosphorus tri-iodide?",
      options: ["Ethylene di-iodide", "Ethylene", "Ethane", "Ethyl iodide"],
      correctAnswer: 1,
      explanation:
        "Phosphorus triiodide (PI₃) is an unstable red solid which reacts violently with water. It is widely used in organic chemistry for converting alcohols to alkyl iodides.",
    },
  ],
  "nitrogen-and-its-compounds": [
    {
      id: 1,
      question:
        "Which of the following is a common oxidation state of nitrogen in its compounds?",
      options: ["+5", "+3", "0", "-3"],
      correctAnswer: 4,
      explanation:
        "Nitrogen commonly exhibits an oxidation state of -3 in compounds like ammonia (NH₃).",
    },
    {
      id: 2,
      question: "What is the primary industrial method for producing ammonia?",
      options: [
        "Ostwald process",
        "Haber process",
        "Contact process",
        "Solvay process",
      ],
      correctAnswer: 2,
      explanation:
        "The Haber process is the primary industrial method for synthesizing ammonia by combining nitrogen and hydrogen gases under high pressure and temperature in the presence of a catalyst.",
    },
    {
      id: 3,
      question: "Which nitrogen oxide is commonly known as laughing gas?",
      options: [
        "Nitric oxide (NO)",
        "Nitrogen dioxide (NO₂)",
        "Nitrous oxide (N₂O)",
        "Dinitrogen tetroxide (N₂O₄)",
      ],
      correctAnswer: 3,
      explanation:
        "Nitrous oxide (N₂O) is commonly known as laughing gas and is used as an anesthetic in dentistry and surgery.",
    },
  ],
  "sulphur-and-its-compounds": [
    {
      id: 1,
      question:
        "Which allotrope of sulfur is the most stable at room temperature?",
      options: [
        "Rhombic sulfur",
        "Monoclinic sulfur",
        "Plastic sulfur",
        "Liquid sulfur",
      ],
      correctAnswer: 1,
      explanation:
        "Rhombic sulfur is the most stable allotrope of sulfur at room temperature.",
    },
    {
      id: 2,
      question: "What is the main component of 'fool's gold'?",
      options: [
        "Iron(II) sulfide",
        "Iron(III) oxide",
        "Copper(I) sulfide",
        "Lead(II) sulfide",
      ],
      correctAnswer: 1,
      explanation:
        "Iron(II) sulfide, also known as pyrite, is commonly referred to as 'fool's gold' due to its metallic luster and pale brass-yellow hue.",
    },
    {
      id: 3,
      question:
        "Which acid is known as the 'king of chemicals' due to its wide range of industrial applications?",
      options: [
        "Hydrochloric acid",
        "Nitric acid",
        "Sulfuric acid",
        "Acetic acid",
      ],
      correctAnswer: 3,
      explanation:
        "Sulfuric acid is often called the 'king of chemicals' because of its extensive use in various industries, including fertilizer production, mineral processing, and chemical synthesis.",
    },
  ],
  "chlorine-and-its-compounds": [
    {
      id: 1,
      question: "Which of the following is NOT true for the halogens?",
      options: [
        "They are nonmetals.",
        "They show the -1 oxidation number in most of their compounds.",
        "The electronic configuration of their outermost electrons is ns² np⁶.",
        "Their compounds with metals are generally ionic in nature.",
      ],
      correctAnswer: 3,
      explanation:
        "The electronic configuration of the outermost electrons in halogens is ns² np⁵, not ns² np⁶.",
    },
    {
      id: 2,
      question:
        "Which of the following substances is the strongest reducing agent?",
      options: ["Cl₂", "Cl⁻", "Br₂", "Br⁻"],
      correctAnswer: 2,
      explanation:
        "Among the given options, Cl⁻ (chloride ion) is the strongest reducing agent.",
    },
    {
      id: 3,
      question: "Chlorine gas is prepared commercially by:",
      options: [
        "Electrolysis of carbon tetrachloride.",
        "Oxidation of chloride ion with F₂(g).",
        "Electrolysis of NaCl(aq).",
        "Oxidation of chloride ion with Br₂(aq).",
      ],
      correctAnswer: 3,
      explanation:
        "Chlorine gas is commercially prepared by the electrolysis of aqueous sodium chloride (NaCl) solution.",
    },
  ],
  "acids-bases-salts": [
    {
      id: 1,
      question:
        "According to the Arrhenius definition, an acid is a substance that:",
      options: [
        "Donates a proton (H⁺)",
        "Accepts a proton (H⁺)",
        "Produces OH⁻ ions in water",
        "Produces H⁺ ions in water",
      ],
      correctAnswer: 4,
      explanation:
        "According to Arrhenius, an acid is a substance that produces H⁺ ions in aqueous solution.",
    },
    {
      id: 2,
      question: "Which of the following is a characteristic of a strong acid?",
      options: [
        "Partially ionizes in solution",
        "Completely ionizes in solution",
        "Has a high pH",
        "Is insoluble in water",
      ],
      correctAnswer: 2,
      explanation:
        "A strong acid completely ionizes in solution, releasing all of its hydrogen ions.",
    },
    {
      id: 3,
      question: "What is the pH of a neutral solution at 25°C?",
      options: ["0", "7", "14", "Depends on the solute"],
      correctAnswer: 2,
      explanation: "At 25°C, a neutral solution has a pH of 7.",
    },
  ],
  "energy-changes": [
    {
      id: 1,
      question: "In an exothermic reaction, energy is:",
      options: [
        "Absorbed from the surroundings",
        "Released to the surroundings",
        "Neither absorbed nor released",
        "Converted entirely into mass",
      ],
      correctAnswer: 2,
      explanation:
        "In an exothermic reaction, energy is released to the surroundings, usually in the form of heat.",
    },
    {
      id: 2,
      question: "The enthalpy change (ΔH) for an endothermic reaction is:",
      options: ["Positive", "Negative", "Zero", "Undefined"],
      correctAnswer: 1,
      explanation:
        "For an endothermic reaction, ΔH is positive because the system absorbs energy from the surroundings.",
    },
    {
      id: 3,
      question: "Which of the following processes is endothermic?",
      options: [
        "Combustion of gasoline",
        "Freezing of water",
        "Melting of ice",
        "Condensation of steam",
      ],
      correctAnswer: 3,
      explanation:
        "Melting of ice is an endothermic process because it requires the absorption of heat to convert solid water into liquid.",
    },
  ],
  "reaction-rates": [
    {
      id: 1,
      question: "Increasing the concentration of reactants generally:",
      options: [
        "Decreases the reaction rate",
        "Increases the reaction rate",
        "Has no effect on the reaction rate",
        "Stops the reaction entirely",
      ],
      correctAnswer: 2,
      explanation:
        "Increasing the concentration of reactants typically increases the reaction rate because there are more particles available to collide and react.",
    },
    {
      id: 2,
      question: "Catalysts affect the rate of a chemical reaction by:",
      options: [
        "Increasing the activation energy",
        "Decreasing the activation energy",
        "Changing the reactants",
        "Altering the equilibrium position",
      ],
      correctAnswer: 2,
      explanation:
        "Catalysts increase the reaction rate by decreasing the activation energy required for the reaction to proceed.",
    },
    {
      id: 3,
      question: "Which factor does NOT affect the rate of a chemical reaction?",
      options: [
        "Temperature",
        "Concentration of reactants",
        "Presence of a catalyst",
        "Color of reactants",
      ],
      correctAnswer: 4,
      explanation:
        "The color of reactants does not affect the rate of a chemical reaction; factors like temperature, concentration, and catalysts do.",
    },
  ],
  "organic-chemistry-2": [
    {
      id: 1,
      question: "Which functional group is characteristic of alcohols?",
      options: ["–OH", "–COOH", "–NH₂", "–SH"],
      correctAnswer: 1,
      explanation:
        "Alcohols are characterized by the hydroxyl group (–OH) attached to a carbon atom.",
    },
    {
      id: 2,
      question: "The reaction of an alcohol with a carboxylic acid produces:",
      options: [
        "An ester and water",
        "An aldehyde and water",
        "A ketone and water",
        "An ether and water",
      ],
      correctAnswer: 1,
      explanation:
        "The reaction between an alcohol and a carboxylic acid forms an ester and water; this process is known as esterification.",
    },
    {
      id: 3,
      question: "Which of the following is an example of a ketone?",
      options: ["Methanol", "Ethanol", "Propanone", "Ethanoic acid"],
      correctAnswer: 3,
      explanation:
        "Propanone, commonly known as acetone, is a simple ketone with the structure CH₃COCH₃.",
    },
  ],

  electrochemistry: [
    {
      id: 1,
      question:
        "In an electrochemical cell, which direction do electrons travel?",
      options: [
        "From the anode to the cathode through the external circuit",
        "From the cathode to the anode through the external circuit",
        "From the anode to the cathode through the electrolyte",
        "From the cathode to the anode through the electrolyte",
      ],
      correctAnswer: 1,
      explanation:
        "In an electrochemical cell, electrons flow from the anode to the cathode through the external circuit.",
    },
    {
      id: 2,
      question:
        "Which of the following statements is FALSE regarding electrochemical cells?",
      options: [
        "Oxidation occurs at the anode.",
        "Reduction occurs at the cathode.",
        "All electrochemical reactions involve the transfer of electrons.",
        "All voltaic cells require an external power source to operate.",
      ],
      correctAnswer: 4,
      explanation:
        "Voltaic (galvanic) cells generate electrical energy from spontaneous chemical reactions and do not require an external power source.",
    },
    {
      id: 3,
      question:
        "During the electrolysis of molten sodium bromide, which half-reaction occurs at the anode?",
      options: [
        "2 Br⁻ → Br₂ + 2 e⁻",
        "Br₂ + 2 e⁻ → 2 Br⁻",
        "Na⁺ + e⁻ → Na",
        "Na → Na⁺ + e⁻",
      ],
      correctAnswer: 1,
      explanation:
        "At the anode during the electrolysis of molten sodium bromide, bromide ions (Br⁻) are oxidized to bromine gas (Br₂), releasing electrons.",
    },
  ],
  metals: [
    {
      id: 1,
      question: "Which of the following metals is most reactive?",
      options: ["Gold", "Iron", "Sodium", "Copper"],
      correctAnswer: 3,
      explanation:
        "Sodium is an alkali metal and is highly reactive, especially with water.",
    },
    {
      id: 2,
      question: "What is the primary component of stainless steel?",
      options: [
        "Iron and carbon",
        "Iron and chromium",
        "Iron and nickel",
        "Iron and zinc",
      ],
      correctAnswer: 2,
      explanation:
        "Stainless steel is primarily composed of iron and chromium, which provides corrosion resistance.",
    },
    {
      id: 3,
      question: "Which process is used to extract aluminum from its ore?",
      options: [
        "Blast furnace reduction",
        "Electrolysis",
        "Thermal decomposition",
        "Fractional distillation",
      ],
      correctAnswer: 2,
      explanation:
        "Aluminum is extracted from its ore, bauxite, through the process of electrolysis.",
    },
  ],
  radioactivity: [
    {
      id: 1,
      question: "Which type of radiation has the highest penetrating power?",
      options: ["Alpha particles", "Beta particles", "Gamma rays", "Neutrons"],
      correctAnswer: 3,
      explanation:
        "Gamma rays have the highest penetrating power among the types of radiation listed.",
    },
    {
      id: 2,
      question: "What is the half-life of a radioactive isotope?",
      options: [
        "The time it takes for half of the radioactive nuclei to decay",
        "The time it takes for all of the radioactive nuclei to decay",
        "The time it takes for the radioactivity to become harmless",
        "The time it takes for the isotope to become stable",
      ],
      correctAnswer: 1,
      explanation:
        "The half-life is the time required for half of the radioactive nuclei in a sample to undergo decay.",
    },
    {
      id: 3,
      question:
        "Which of the following particles is emitted during beta decay?",
      options: ["Helium nucleus", "Electron", "Photon", "Neutron"],
      correctAnswer: 2,
      explanation:
        "During beta decay, a neutron is converted into a proton, and an electron (beta particle) is emitted.",
    },
  ],
  "structure-of-the-atom": [
    {
      id: 1,
      question: "The atomic number of an element represents the number of",
      options: [
        "Neutrons in the nucleus",
        "Electrons in the atom",
        "Protons in the nucleus",
        "Nucleons in the atom",
      ],
      correctAnswer: 3,
      explanation:
        "The atomic number of an element represents the number of protons in the nucleus.",
    },
    {
      id: 2,
      question:
        "Which of the following is the correct formula for the atomic mass of an element?",
      options: ["M = m/n", "M = m/n", "M = n/m", "M = m/n"],
      correctAnswer: 1,
      explanation:
        "The atomic mass of an element is directly proportional to the number of protons in the nucleus.",
    },
  ],
  "chemical-families": [
    {
      id: 1,
      question:
        "Which of the following is a chemical family that includes elements with the same electron configuration?",
      options: ["Alkali metals", "Alkaline earth metals", "Transition metals"],
      correctAnswer: 1,
      explanation:
        "Alkali metals are a chemical family that includes elements with the same electron configuration.",
    },
    {
      id: 2,
      question:
        "Which of the following is a chemical family that includes elements with the same electron configuration?",
      options: ["Alkali metals", "Alkaline earth metals", "Transition metals"],
      correctAnswer: 1,
      explanation:
        "Alkali metals are a chemical family that includes elements with the same electron configuration.",
    },
  ],
  "structure-and-bonding": [
    {
      id: 1,
      question:
        "Which type of bond is formed when electrons are shared between atoms?",
      options: [
        "Ionic bond",
        "Covalent bond",
        "Metallic bond",
        "Hydrogen bond",
      ],
      correctAnswer: 2,
      explanation:
        "Covalent bonds are formed when electrons are shared between atoms.",
    },
    {
      id: 2,
      question: "Why do ionic compounds typically have high melting points?",
      options: [
        "Weak intermolecular forces",
        "Ions are free to move",
        "Strong electrostatic forces of attraction",
        "Exist as gases",
      ],
      correctAnswer: 3,
      explanation:
        "Weak intermolecular forces, ions are free to move, and strong electrostatic forces of attraction.",
    },
  ],

  "properties-and-trends": [
    {
      id: 1,
      question:
        "Which of the following elements has the highest electronegativity?",
      options: ["Sodium", "Chlorine", "Magnesium", "Aluminum"],
      correctAnswer: 2,
      explanation: "Aluminum has the highest electronegativity.",
    },
    {
      id: 2,
      question:
        "What is the primary reason alkali metals like potassium (K) are highly reactive?",
      options: [
        "They have a high ionization energy",
        " They have one valence electron",
        "They have a stable electron configuration.",
        "They readily gain electrons.",
      ],
      correctAnswer: 2,
      explanation: "They have a high ionization energy.",
    },
  ],
  salts: [
    {
      id: 1,
      question:
        "Which of the following is the correct formula for the solubility of a salt in water?",
      options: [
        "K = 0.001 × S × T",
        "K = 0.001 × S × T",
        "K = S × T",
        "K = 0.001 × S × T",
      ],
      correctAnswer: 1,
      explanation:
        "The solubility of a salt in water is directly proportional to the concentration of salt and the temperature.",
    },
    {
      id: 2,
      question:
        "Which of the following is the correct formula for the solubility of a salt in water?",
      options: [
        "K = 0.001 × S × T",
        "K = 0.001 × S × T",
        "K = S × T",
        "K = 0.001 × S × T",
      ],
      correctAnswer: 1,
      explanation:
        "The solubility of a salt in water is directly proportional to the concentration of salt and the temperature.",
    },
    {
      id: 3,
      question:
        "Which of the following is the correct formula for the solubility of a salt in water?",
      options: [
        "K = 0.001 × S × T",
        "K = 0.001 × S × T",
        "K = S × T",
        "K = 0.001 × S × T",
      ],
      correctAnswer: 1,
      explanation:
        "The solubility of a salt in water is directly proportional to the concentration of salt and the temperature.",
    },
  ],
  "electrolysis-1": [
    {
      id: 1,
      question:
        "Which of the following is the correct equation for the work done by an electrolysis cell?",
      options: ["W = I × t", "W = I × t", "W = V × t", "W = P × t"],
      correctAnswer: 1,
      explanation:
        "The work done by an electrolysis cell is equal to the product of the current and the time.",
    },
    {
      id: 2,
      question:
        "Which of the following is the correct equation for the work done by an electrolysis cell?",
      options: ["W = I × t", "W = I × t", "W = V × t", "W = P × t"],
      correctAnswer: 1,
      explanation:
        "The work done by an electrolysis cell is equal to the product of the current and the time.",
    },
  ],
  "carbon-and-its-compounds": [
    {
      id: 1,
      question:
        "Which of the following is the correct formula for the molecular mass of carbon?",
      options: [
        "C = 12.01 g/mol",
        "C = 12.01 g/mol",
        "C = 12 g/mol",
        "C = 12.01 g/mol",
      ],
      correctAnswer: 1,
      explanation: "The molecular mass of carbon is 12.01 g/mol.",
    },
    {
      id: 2,
      question:
        "Which of the following is the correct formula for the molecular mass of carbon?",
      options: [
        "C = 12.01 g/mol",
        "C = 12.01 g/mol",
        "C = 12 g/mol",
        "C = 12.01 g/mol",
      ],
      correctAnswer: 1,
      explanation: "The molecular mass of carbon is 12.01 g/mol.",
    },
    {
      id: 3,
      question:
        "Which of the following is the correct formula for the molecular mass of carbon?",
      options: [
        "C = 12.01 g/mol",
        "C = 12.01 g/mol",
        "C = 12 g/mol",
        "C = 12.01 g/mol",
      ],
      correctAnswer: 1,
      explanation: "The molecular mass of carbon is 12.01 g/mol.",
    },
  ],
  "gas-laws": [
    {
      id: 1,
      question:
        "Which of the following best describes the relationship between pressure and volume in an ideal gas (at constant temperature)?",
      options: [
        "Directly proportional",
        "Inversely proportional",
        "No relationship",
        "Exponentially related",
      ],
      correctAnswer: 1,
      explanation:
        "According to Boyle's Law, pressure and volume are inversely proportional when temperature is held constant.",
    },
    {
      id: 2,
      question:
        "At constant pressure, what happens to the volume of a gas when its temperature is doubled (in Kelvin)?",
      options: [
        "Volume doubles",
        "Volume halves",
        "Volume remains the same",
        "Volume increases by 4 times",
      ],
      correctAnswer: 0,
      explanation:
        "According to Charles's Law, volume is directly proportional to temperature (in Kelvin) at constant pressure.",
    },
    {
      id: 3,
      question:
        "Which gas law states that equal volumes of gases at the same temperature and pressure contain the same number of molecules?",
      options: [
        "Boyle's Law",
        "Charles's Law",
        "Avogadro's Law",
        "Gay-Lussac's Law",
      ],
      correctAnswer: 2,
      explanation:
        "Avogadro's Law states that equal volumes of gases at the same temperature and pressure contain the same number of molecules.",
    },
  ],
};
// Practice problems data remains the same

interface PracticeInterfaceProps {
  topic: string;
}
function PracticeInterface({ topic }: PracticeInterfaceProps) {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>(
    undefined
  );
  const [isAnswered, setIsAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const { toast } = useToast();
  const topicsKey = topic as keyof typeof problems;

  const handleNext = () => {
    if (currentProblem < problems[topicsKey].length - 1) {
      setSelectedAnswer(undefined);
      setShowExplanation(false);
      setCurrentProblem((prev) => prev + 1);
      setIsAnswered(false);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === undefined) {
      toast({
        title: "Please select an answer",
        description: "You must choose an option before submitting.",
        variant: "destructive",
      });
      return;
    }

    const numericAnswer = parseInt(selectedAnswer);
    if (
      numericAnswer + 1 ===
      problems[topicsKey][currentProblem].correctAnswer
    ) {
      setScore((prev) => prev + 1);
      toast({
        title: "Correct!",
        description: "Great job! Let's see the explanation.",
        variant: "default",
      });
      setIsAnswered(true);
    } else {
      toast({
        title: "Incorrect",
        description: "Don't worry! Let's learn from the explanation.",
        variant: "destructive",
      });
    }
    setIsAnswered(true);
    setShowExplanation(true);
  };

  const progress = ((currentProblem + 1) / problems[topicsKey].length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <BeakerIcon className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">
            {topicsKey.replace(/-/g, " ").toUpperCase()}
          </h1>
        </div>
        <Toaster />
        <div className="flex gap-4 mb-6">
          <Card className="flex-1">
            <CardHeader className="flex flex-row items-center gap-2">
              <BookOpenIcon className="w-4 h-4" />
              <CardTitle>Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-muted-foreground mt-2">
                Question {currentProblem + 1} of {problems[topicsKey].length}
              </p>
            </CardContent>
          </Card>

          <Card className="flex-1">
            <CardHeader className="flex flex-row items-center gap-2">
              <GraduationCapIcon className="w-4 h-4" />
              <CardTitle>Score</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {score}/{problems[topicsKey].length}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Question {currentProblem + 1}</CardTitle>
            <CardDescription>Select the best answer</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-6">
              {problems[topicsKey][currentProblem].question}
            </p>
            {/* Key added to RadioGroup to force remount */}
            {!isAnswered ? (
              <RadioGroup
                key={currentProblem}
                defaultValue={undefined}
                value={selectedAnswer}
                onValueChange={setSelectedAnswer}
                className="space-y-4"
              >
                {problems[topicsKey][currentProblem].options.map(
                  (option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={index.toString()}
                        id={`option-${index}`}
                      />
                      <Label htmlFor={`option-${index}`} className="text-base">
                        {option}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            ) : (
              showExplanation && (
                <div>
                  <p>
                    Correct Answer:{" "}
                    {
                      problems[topicsKey][currentProblem].options[
                        problems[topicsKey][currentProblem].correctAnswer - 1
                      ]
                    }
                  </p>
                  <Card
                    className="mt-6 bg-muted"
                    status={
                      parseInt(selectedAnswer || "") + 1 ===
                      problems[topicsKey][currentProblem].correctAnswer
                        ? "correct"
                        : "wrong"
                    }
                  >
                    <CardContent className="pt-6">
                      <p className="font-semibold mb-2">Explanation:</p>
                      <p>{problems[topicsKey][currentProblem].explanation}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            )}

            <div className="flex justify-end gap-4 mt-6">
              {!showExplanation ? (
                <Button onClick={handleSubmit}>Submit Answer</Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={currentProblem === problems[topicsKey].length - 1}
                >
                  Next Question
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default PracticeInterface;
