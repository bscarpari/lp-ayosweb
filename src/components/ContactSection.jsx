import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Vamos trabalhar juntos
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Prezamos por um atendimento direto ao ponto para que você possa ter
            a melhor experiência possível.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              href={'https://wa.me/+5551990104523'}
              target={'{_blank}'}
              className="whitespace-nowrap rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-slate-200"
              invert={false}
            >
              Entrar em contato
            </Button>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
