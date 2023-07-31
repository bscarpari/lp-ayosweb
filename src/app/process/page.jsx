import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'

import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Brainstorming() {
  return (
    <Section title="Brainstorming" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Nós trabalhamos em conjunto com nossos clientes para entender suas{' '}
          <strong className="font-semibold text-neutral-950">
            necessidades
          </strong>{' '}
          e objetivos, nos envolvendo em cada etapa do processo para garantir a
          melhor solução.
        </p>
        <p>
          <p>
            Nosso time busca entender o seu{' '}
            <strong className="font-semibold text-neutral-950">negócio</strong>{' '}
            e o que você deseja alcançar com o projeto. Assim, nós seguimos
            criteriosamente um processo de extração das suas ideias e vontades.
            Assim, seguimos uma ordem:
          </p>
          <br />
          <ol>
            <li>
              <strong className="font-semibold text-neutral-950">
                Pesquisa de mercado
              </strong>{' '}
              — análise do mercado e de seus concorrentes para entender o que
              está sendo feito e como podemos melhorar.
            </li>
            <br />

            <li>
              <strong className="font-semibold text-neutral-950">
                Esboços
              </strong>{' '}
              — criamos esboços para tirar sua ideia do papel o quanto antes,
              garantindo que uma boa ideia não seja perdida.
            </li>
            <br />

            <li>
              <strong className="font-semibold text-neutral-950">
                Documentação
              </strong>{' '}
              — documentação compartilhada para garantir que o projeto seja
              desenvolvido como desejado e claramente visível para você.
            </li>
          </ol>
        </p>
        <p>
          Por fim, nós apresentamos a você o{' '}
          <strong className="font-semibold text-neutral-950">
            plano de desenvolvimento
          </strong>{' '}
          para que você possa ter uma visão clara do que será feito e como será
          feito.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Processos da fase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Esboços</TagListItem>
        <TagListItem>Questionários</TagListItem>
        <TagListItem>Feedbacks</TagListItem>
        <TagListItem>Teste e validação</TagListItem>
        <TagListItem>Plano de desenvolvimento</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Desenvolvimento" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Baseado na fase de brainstorming, nós desenvolvemos um plano de
          desenvolvimento para cada produto e começamos a trabalhar para
          entregá-lo.
        </p>
        <p>
          Geralmente nesta fase, contamos com a sua ajuda para validar o que
          estamos desenvolvendo e garantir que o produto final seja o que você
          deseja. Para isto, também seguidos um processo:
        </p>
        <ol>
          {/* 1. Esboços */}
          <li>
            <strong className="font-semibold text-neutral-950">
              Protótipos
            </strong>{' '}
            — criamos esboços para tirar sua ideia do papel o quanto antes,
            garantindo que uma boa ideia não seja perdida.
          </li>
          <br />
          <li>
            <strong className="font-semibold text-neutral-950">
              Desenvolvimento
            </strong>{' '}
            — seguimos uma ordem lógica de desenvolvimento: 1. prototipação, 2.
            front-end, 3. back-end, 4. testes.
          </li>
          <br />
          <li>
            <strong className="font-semibold text-neutral-950">
              Demonstração e testes
            </strong>{' '}
            — nós realizamos testes e validações para garantir que tudo esteja
            funcionando corretamente antes do lançamento.
          </li>
        </ol>
      </div>

      <Blockquote
        author={{ name: 'Bruno Scarpari', role: 'CEO' }}
        className="mt-12"
      >
        Na Ayos, nós nos preocupamos com a sua satisfação e a certeza de que
        fizemos o nosso melhor. Assim, qualquer insatisfação ou alterações
        simples que você desejar serão feitas sem custo adicional.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Entrega" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Por fim, nós lhe entregamos o produto final e lhe apresentamos o{' '}
          <strong className="font-semibold text-neutral-950">
            plano de manutenção
          </strong>{' '}
          para que você possa manter o projeto no ar e garantir que tudo esteja
          funcionando corretamente.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Últimas etapas
      </h3>
      <List className="mt-8">
        <ListItem title="Infraestrutura">
          Não se preocupe com a hospedagem, nós cuidamos disso para você.
          Conosco, manter o projeto no ar e garantir que tudo esteja funcionando
          corretamente é nossa responsabilidade.
        </ListItem>
        <ListItem title="Suporte">
          Após o lançamento, buscamos manter contato com você para garantir que
          não haja insatisfações e suprir eventuais necessidades.
        </ListItem>
        <ListItem title="Pacotes de impulsão">
          Pensando no seu crescimento, oferecemos pacotes de recursos como:
          fotografia, design gráfico e automação para acrescentar ao seu negócio
          ou ideia.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Nossos valores"
        title="Equilibrando confiabilidade e inovação"
      >
        <p>
          Prezamos pela sua satisfação e a certeza de fizemos o nosso melhor.
          Assim, buscamos sanar suas dúvidas e trazer a melhor solução para as
          suas necessidades.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem
            title="Satisfação"
            description="A remuneração é apenas uma consequência de um bom serviço, buscamos sua satisfação e a certeza de que fizemos o nosso melhor."
          />
          <GridListItem
            title="Confiabilidade"
            description="Acreditamos que a confiança é a base de qualquer relação, por isso prezamos por um atendimento atencioso e transparente."
          />
          <GridListItem
            title="Simplicidade"
            description="Menos é mais. A simplicidade remove excessos, por isso, nossos processos são pensados para solucionar sua necessidade de maneira clara."
          />
          <GridListItem
            title="Inovação"
            description="Inovar é o que nos move, por isso nosso time está sempre em busca de novas inspirações e soluções a você."
          />
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Nossos processos',
  description:
    'Acreditamos na eficiência e no comprometimento com a qualidade para fornecer valor aos nossos clientes.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Nossos processos" title="Como trabalhamos" />

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Brainstorming />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
