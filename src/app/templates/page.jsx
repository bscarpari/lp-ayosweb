import { useId } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function ContactForm() {
  const templates = [
    ['Landing page (Lynx)', 'https://templates.ayos.dev/lynx/'],
    ['Dashboard (Panther)', 'https://templates.ayos.dev/panther/'],
  ]

  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Modelos para demonstração
        </h2>
        <span className="text-sm text-zinc-500">
          Clique no modelo para abrir em uma nova aba.
        </span>
        {/* Create a list with templates links */}
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Modelos</legend>
              <div className="mt-6 flex w-full justify-start">
                {templates.map(([label, href]) => (
                  <div key={href}>
                    <Button
                      href={href}
                      className="mr-6 whitespace-nowrap"
                      target={'_blank'}
                    >
                      {label}
                    </Button>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Entre em contato
      </h2>
      <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
        {[['Contato', 'contato@ayos.dev']].map(([label, email]) => (
          <div key={email}>
            <dt className="font-semibold text-neutral-950">{label}</dt>
            <dd>
              <Link
                href={`mailto:${email}`}
                className="text-neutral-600 hover:text-neutral-950 hover:underline"
              >
                {email}
              </Link>
            </dd>
          </div>
        ))}
      </dl>
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Nos siga
        </h2>
        <SocialMedia className="mt-6" />
      </Border>

      <Border className="mt-16 flex w-full flex-row items-center justify-between pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Nos chame no WhatsApp
        </h2>
        <Button
          type="submit"
          className="ml-6"
          href={'https://wa.me/+5551990104523'}
        >
          Vamos trabalhar juntos?
        </Button>
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Templates',
  description: 'Veja alguns de nossos modelos de demonstração.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="" title="Templates">
        <p>Aproveite e veja alguns de nossos modelos de demonstração.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
