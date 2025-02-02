import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuIconOnlyTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  ArrowRightIcon,
  Atom,
  AtomIcon,
  BeakerIcon,
  Cable,
  Filter,
  FlaskConicalIcon,
  FlaskRound,
  GlassWater,
  Link as lucideLink,
  Orbit,
  Pickaxe,
  Pipette,
  Radiation,
  Table,
  TestTube,
  TestTubeDiagonal,
} from "lucide-react";
import Link from "next/link";
type ContentKeys = "form1" | "form2" | "form3" | "form4" | "form5";

const content: Record<ContentKeys, string> = {
  form1: "1",
  form2: "2",
  form3: "3",
  form4: "4",
  form5: "5",
};
const form1Topics = [
  {
    title: "Introduction to Chemistry",
    icon: BeakerIcon,
    subtopics: [
      "Laboratory Safety",
      "Scientific Method",
      "Basic Lab Equipment",
    ],
    slug: "intro-to-chemistry",
  },
  {
    title: "Simple Classification of Substances",
    icon: Filter,
    subtopics: ["Solids", "Liquids", "Gases", "Changes of State"],
    slug: "states-of-matter",
  },
  {
    title: "Acids, Bases and Indicators",
    icon: Pipette,
    subtopics: ["Acids", "Bases", "Indicators", "PH"],
    slug: "acids-bases-indicators",
  },
  {
    title: "Air and Combustion",
    icon: AtomIcon,
    subtopics: ["Composition of Air", "Oxygen", "Combustion", "Rusting"],
    slug: "air-and-combustion",
  },
  {
    title: "Water and Hydrogen",
    icon: GlassWater,
    subtopics: ["Water", "Hydrogen", "Hydrogen Properties", "Reaction"],
    slug: "water-and-hydrogen",
  },
];

const form2Topics = [
  {
    title: "Structure of the atom and the periodic table",
    icon: Atom,
    subtopics: [
      "Valency",
      "Atomic number",
      "Isotopes",
      "Electronic configuration",
      "Periodic table",
      "The atom",
    ],
    slug: "structure-of-the-atom",
  },
  {
    title: "Chemical families",
    icon: Atom,
    subtopics: ["Elements", "Groups", "Periods", "Atomic numbers", "Valency"],
    slug: "chemical-families",
  },
  {
    title: "Structure and bonding",
    icon: lucideLink,
    subtopics: [
      "Covalent bond",
      "Ionic Bond",
      "Metallic Bond",
      "Intermolecular Forces",
    ],
    slug: "structure-and-bonding",
  },

  {
    title: "Properties and trends across a period",
    icon: Table,
    subtopics: [
      "Chemical properties",
      "Physical properties",
      "Trends",
      "Atomic structure",
      "period",
      "intermolecular forces",
    ],
    slug: "properties-and-trends",
  },
  {
    title: "Salts",
    icon: TestTubeDiagonal,
    subtopics: [
      "hygroscopy",
      "efflorescence",
      "deliquescence",
      "water of crystallization",
      "anhydrous salts",
      "acidic salts",
      "basic salts",
      "neutral salts",
    ],
    slug: "salts",
  },
  {
    title: "Effects of electric current on substances",
    icon: Cable,
    subtopics: [
      "Electrolysis",
      "Electroplating",
      "Electrolytes",
      "Electrodes",
      "Cathode",
      "Anode",
    ],
    slug: "electrolysis-1",
  },
  {
    title: "Carbon and its compounds",
    icon: FlaskRound,
    subtopics: ["Carbon", "Diamond", "Allotropy", "Allotrope", "Fullerenes"],
    slug: "carbon-and-its-compounds",
  },
];
const form3Topics = [
  {
    title: "Gas Laws",
    icon: BeakerIcon,
    subtopics: [
      "Grahams law",
      "Boyles law",
      "Charles law",
      "Avogadros law",
      "Ideal gas law",
      "Kinetic theory",
    ],
    slug: "gas-laws",
  },
  {
    title: "The mole:Formulae and chemical equations",
    icon: FlaskConicalIcon,
    subtopics: [
      "R.A.M",
      "R.F.M",
      "Molarity",
      "Stochiometric equations",
      "Titration",
    ],
    slug: "the-mole",
  },

  {
    title: "Organic Chemistry 1",
    icon: FlaskConicalIcon,
    subtopics: [
      "Alkanes",
      "Alkenes",
      "Alkynes",
      "Hydrocarbons",
      "Saturated hydrocarbons",
      "Unsaturated hydrocarbons",
      "Homologous series",
    ],
    slug: "organic-chemistry-1",
  },
  {
    title: "Nitrogen and its Compounds",
    icon: FlaskRound,
    subtopics: [
      "Nitrous oxide",
      "Nitric oxide",
      "Nitrogen dioxide",
      "Ammonia",
      "Nitric acid",
      "Oswald process",
    ],
    slug: "nitrogen-and-its-compounds",
  },
  {
    title: "Sulphur and its Compounds",
    icon: FlaskRound,
    subtopics: [
      "Frasch process",
      "Sulphur dioxide",
      "Sulphuric acid",
      "Contact process",
      "Occurrence of sulphur",
    ],
    slug: "sulphur-and-its-compounds",
  },
  {
    title: "Chlorine and its compounds",
    icon: FlaskRound,
    subtopics: [
      "Hydrochloric acid",
      "Bleaching powder",
      "Chlorine water",
      "Chlorine gas",
      "Halogens",
    ],
    slug: "chlorine-and-its-compounds",
  },
];
const form4Topics = [
  {
    title: "Acids, Bases and Salts",
    icon: BeakerIcon,
    subtopics: [
      "Alkalis",
      "Amphoterism",
      "Salts",
      "Solubility",
      "Water hardness",
    ],
    slug: "acids-bases-salts",
  },
  {
    title: "Energy changes in chemical and physical processes",
    icon: Orbit,
    subtopics: [
      "Specific heat capacity",
      "Enthalpy",
      "Endothermic",
      "Exothermic",
      "Hess Law",
    ],
    slug: "energy-changes",
  },

  {
    title: "Reaction rates and reversible reactions",
    icon: TestTubeDiagonal,
    subtopics: [
      "Le Chateliers principle",
      "Catalysts",
      "Rate of reaction",
      "Reversible reactions",
      "Dynamic equilibrium",
    ],
    slug: "reaction-rates",
  },
  {
    title: "Organic Chemistry II",
    icon: FlaskConicalIcon,
    subtopics: [
      "Alkanols",
      "Alkanoic acids",
      "Esters",
      "Esterification",
      "Isomerism",
    ],
    slug: "organic-chemistry-2",
  },
  {
    title: "Electrochemistry",
    icon: Cable,
    subtopics: [
      "Displacement",
      "Voltaic cells",
      "Electrolytic cells",
      "Electrolysis",
    ],
    slug: "electrochemistry",
  },
  {
    title: "Metals",
    icon: Pickaxe,
    subtopics: ["Ore concentration", "Sodium", "Extraction", "Copper"],
    slug: "metals",
  },
  {
    title: "Radioactivity",
    icon: Radiation,
    subtopics: [
      "Gamma rays",
      "Beta rays",
      "Alpha rays",
      "Half life",
      "Nuclear fission",
      "Nuclear fusion",
    ],
    slug: "radioactivity",
  },
];
export default function Page({ params }: { params: { form: string } }) {
  const { form } = params;
  let currentForm = form1Topics;
  if (form === "form1") {
    currentForm = form1Topics;
  } else if (form === "form2") {
    currentForm = form2Topics;
  } else if (form === "form3") {
    currentForm = form3Topics;
  } else if (form === "form4") {
    currentForm = form4Topics;
  }
  const topics = currentForm;
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="float-right">
                Form {content[form as ContentKeys]}{" "}
                <DropdownMenuIconOnlyTrigger />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <Link href="/learn/chemistry/form1" className=" outline-none">
                {" "}
                <DropdownMenuItem>Form 1</DropdownMenuItem>
              </Link>
              <Link href="/learn/chemistry/form2" className="outline-none">
                {" "}
                <DropdownMenuItem>Form 2</DropdownMenuItem>
              </Link>
              <Link href="/learn/chemistry/form3" className=" outline-none">
                {" "}
                <DropdownMenuItem>Form 3</DropdownMenuItem>
              </Link>

              <Link href="/learn/chemistry/form4" className=" outline-none">
                {" "}
                <DropdownMenuItem>Form 4</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Form {content[form as ContentKeys]} Chemistry
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Master the fundamentals of chemistry with our comprehensive
            curriculum
          </p>
        </div>

        <div className="grid gap-6">
          {topics.map((topic) => (
            <Link
              href={`form${content[form as ContentKeys]}/${topic.slug}`}
              key={topic.slug}
            >
              <Card className="p-6 hover:shadow-lg transition-all hover:scale-[1.01] cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <topic.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        {topic.title}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {topic.subtopics.map((subtopic, index) => (
                          <span
                            key={index}
                            className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded-full"
                          >
                            {subtopic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const forms: ContentKeys[] = ["form1", "form2", "form3", "form4", "form5"];
  return forms.map((form) => ({ form: form }));
}
