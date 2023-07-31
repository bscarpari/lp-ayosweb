/* eslint-disable react/jsx-key */
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'

import imageLaptop from '@/images/laptop.jpg'

import iconNextjs from '@/images/technologies/next/next.svg'
import iconTailwind from '@/images/technologies/tailwind/tailwind.svg'
import iconNodejs from '@/images/technologies/node/node.svg'
import iconWooCommerce from '@/images/technologies/woocommerce/woocommerce.svg'

import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

const technologies = [
  ['Next.js', iconNextjs],
  ['Tailwind CSS', iconTailwind],
  ['Node.js', iconNodejs],
  ['WooCommerce', iconWooCommerce],
]

function Technologies() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Nós trabalhamos com tecnologias sólidas do mercado
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {/* Render react-icons  */}
            {technologies.map(([t, icon]) => (
              <li key={t}>
                <FadeIn>
                  {/* render svg icon */}
                  <div className="flex items-center justify-start">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white px-4">
                      <Image src={icon} alt={t} width={128} />
                    </div>
                    <p className="text-md mx-2 font-sans font-semibold text-white">
                      {t}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Projects({ projects }) {
  return (
    <>
      <SectionIntro
        title="Usando a tecnologia para um futuro melhor"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Acreditamos que a tecnologia e um bom serviço são uma das respostas
          para os desafios do mundo.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((p) => (
            <FadeIn key={p.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={p.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={p.logo}
                      alt={p.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={p.year} className="font-semibold">
                    {p.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{p.category}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {p.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {p.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Serviços"
        title="Nós ajudamos você a crescer o seu negócio"
        className="mt-24 sm:mt-32 lg:mt-40"
      ></SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Desenvolvimento web">
              Nosso foco é desenvolver aplicações web de alta qualidade,
              entregando uma experiência completa. Nós suprimos sua necessidade
              com: design, desenvolvimento, hospedagem e manutenção.
            </ListItem>
            <ListItem title="Design Gráfico">
              Nosso time de design é especializado em criar peças gráficas
              incríveis. Nós podemos criar desde um simples cartão de visita até
              uma identidade visual completa para a sua empresa.
            </ListItem>
            <ListItem title="E-commerce">
              Trabalhamos com as melhores plataformas de e-commerce do mercado e
              podemos criar sua loja virtual em poucos dias. Nós também podemos
              integrar e automatizar o processo de venda.
            </ListItem>
            <ListItem title="Automação">
              Na Ayos, entendemos a importância da automação. É por isso que
              automatizamos nossos processos e dos clientes para que possamos
              focar no que realmente importa.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'Somos uma agência de desenvolvimento que trabalha na interseção entre design e tecnologia.',
}

export default async function Home() {
  let projects = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Desenvolvemos para inovar, criamos para transformar
          </h1>
          <p className="mt-6 text-justify text-xl text-neutral-600">
            Somos uma agência de desenvolvimento que trabalha na interseção
            entre design e tecnologia. Buscamos desenvolver produtos digitais
            que sejam atraentes, funcionais e que resolvam problemas reais.
          </p>
        </FadeIn>
      </Container>

      <Technologies />

      <Projects projects={projects} />

      <Services />

      <ContactSection />
    </>
  )
}
