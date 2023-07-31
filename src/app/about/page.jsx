import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'

import imageLeslieAlexander from '@/images/team/bruno.jpg'
import imageMichaelFoster from '@/images/team/maria.jpg'

import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Nossa cultura"
        title="Além de um bom serviço"
        invert
      >
        <p>Somos um grupo de pessoas que buscam os mesmos valores</p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Confiança" invert>
            Um bom serviço não é o suficiente, é preciso confiança. Afinal,
            confiança gera segurança. Estamos dispostos a conversar e provar
            nosso valor com suor.
          </GridListItem>
          <GridListItem title="Qualidade" invert>
            Somos um grupo de pessoas atentas aos detalhes, perfeccionistas
            assíduos e apaixonados por mostrar o melhor de nós em cada projeto.
          </GridListItem>
          <GridListItem title="Paixão" invert>
            Sem paixão, não há motivação. Sem motivação, não há trabalho. Sem
            trabalho, não há resultado. E por isso, somos apaixonados pelo que
            fazemos.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Time',
    people: [
      {
        name: 'Bruno Scarpari',
        role: 'Fundador / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Maria Eduarda Bastos',
        role: 'Designer / Fotógrafa',
        image: { src: imageMichaelFoster },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'Sobre nós',
  description:
    'Nós acreditamos que nossa força está na nossa abordagem colaborativa, que coloca nossos clientes no centro de tudo o que fazemos.',
}

export default async function About() {
  let blogArticles = (await loadMDXMetadata('blog')).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Sobre nós" title="História">
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            A Ayos começou com dois amigos que perceberam um grande defícit
            entre unir uma boa experiência do usuário, uma aplicação bem
            construída e uma marca confiável. Desde o início, nos comprometemos
            a fazer as coisas de maneira diferente, cobrando por um serviço além
            do esperado, que impacte positivamente nossos clientes e inspire
            muitas outras pessoas.
          </p>
          <p>
            Hoje, permanecemos com uma pequena equipe, mas sempre com grandes
            ideias. Nossa equipe é composta por pessoas apaixonadas por
            tecnologia, design, fotografia, etc. Nosso objetivo é impactar
            nossos clientes, de maneira que as nossas soluções digitais não
            sejam apenas agradáveis, mas também funcionais.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="2" label="Anos de experiência" />
          <StatListItem value="12" label="Clientes impactados" />
          <StatListItem value="R$86.000" label="Faturamento" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Direto do blog"
        intro="Nosso time tem apenas uma coisa em mente: trabalhar com ideias para transformar e inspirar além do presente."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
