import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">ПрофШтукатур</div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#guarantees" className="text-foreground hover:text-primary transition-colors">Гарантии</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button size="lg" className="hidden md:inline-flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                Профессиональные штукатурные работы в Москве
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Качественная отделка стен и фасадов. Гарантия на все работы. Опыт более 15 лет.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Наши работы
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/57e4b74b-28cf-453e-b606-6462dd861059/files/02eec949-f6d5-4853-818d-9b5d212d87d8.jpg" 
                alt="Штукатурные работы"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выполняем полный комплекс штукатурных работ для жилых и коммерческих объектов
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Home",
                title: "Внутренняя отделка",
                description: "Штукатурка стен и потолков внутри помещений. Выравнивание поверхностей под покраску и обои.",
                price: "от 450 ₽/м²"
              },
              {
                icon: "Building",
                title: "Фасадные работы",
                description: "Декоративная и защитная штукатурка фасадов. Работаем с различными типами покрытий.",
                price: "от 650 ₽/м²"
              },
              {
                icon: "Layers",
                title: "Машинная штукатурка",
                description: "Быстрое нанесение штукатурки механизированным способом. Идеально для больших площадей.",
                price: "от 380 ₽/м²"
              },
              {
                icon: "Palette",
                title: "Декоративная отделка",
                description: "Венецианская штукатурка, короед, барашек и другие декоративные покрытия.",
                price: "от 850 ₽/м²"
              },
              {
                icon: "Droplets",
                title: "Гидроизоляция",
                description: "Штукатурка с гидроизоляционными свойствами для влажных помещений.",
                price: "от 550 ₽/м²"
              },
              {
                icon: "Flame",
                title: "Огнезащитная штукатурка",
                description: "Специальные составы для повышения пожарной безопасности конструкций.",
                price: "от 720 ₽/м²"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-lg font-semibold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Почему выбирают нас</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Профессиональный подход к каждому проекту
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "Award",
                title: "15+ лет опыта",
                description: "Более 500 реализованных объектов"
              },
              {
                icon: "Users",
                title: "Квалифицированные мастера",
                description: "Все специалисты имеют сертификаты"
              },
              {
                icon: "Clock",
                title: "Соблюдение сроков",
                description: "Работаем по договору с точными датами"
              },
              {
                icon: "ShieldCheck",
                title: "Гарантия качества",
                description: "До 3 лет гарантии на работы"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Портфолио работ</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Примеры наших реализованных проектов
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://cdn.poehali.dev/projects/57e4b74b-28cf-453e-b606-6462dd861059/files/2adae84d-33ff-4db1-9f46-1d9ef4d7b605.jpg",
                title: "Жилой комплекс «Премьер»",
                description: "Внутренняя отделка квартир, 2500 м²"
              },
              {
                image: "https://cdn.poehali.dev/projects/57e4b74b-28cf-453e-b606-6462dd861059/files/eb9c08e5-3f00-4af4-a699-52240f6d6cff.jpg",
                title: "Бизнес-центр «Столица»",
                description: "Фасадные работы, 1800 м²"
              },
              {
                image: "https://cdn.poehali.dev/projects/57e4b74b-28cf-453e-b606-6462dd861059/files/02eec949-f6d5-4853-818d-9b5d212d87d8.jpg",
                title: "Частный коттедж",
                description: "Полная отделка, 350 м²"
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="guarantees" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши гарантии</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы несем полную ответственность за качество выполненных работ
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "FileCheck",
                title: "Договор с фиксированной ценой",
                description: "Стоимость не изменится в процессе работы. Все условия прописаны в договоре."
              },
              {
                icon: "Shield",
                title: "Гарантия до 3 лет",
                description: "Предоставляем официальную гарантию на все виды штукатурных работ."
              },
              {
                icon: "Package",
                title: "Качественные материалы",
                description: "Работаем только с проверенными брендами: Knauf, Ceresit, Weber."
              },
              {
                icon: "Wrench",
                title: "Бесплатное устранение дефектов",
                description: "Если в гарантийный период возникнут проблемы — исправим бесплатно."
              }
            ].map((guarantee, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={guarantee.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{guarantee.title}</h3>
                    <p className="text-muted-foreground">{guarantee.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-muted-foreground mb-8">
                Оставьте заявку, и мы свяжемся с вами в течение 15 минут для бесплатной консультации и расчета стоимости
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+74951234567" className="text-lg text-primary hover:underline">+7 (495) 123-45-67</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@profshtukatur.ru" className="text-lg text-primary hover:underline">info@profshtukatur.ru</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Строителей, д. 15</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</div>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Заказать консультацию</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Опишите ваш объект и задачи" 
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">ПрофШтукатур</div>
              <p className="text-white/70">
                Профессиональные штукатурные работы в Москве и области
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors">Внутренняя отделка</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Фасадные работы</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Машинная штукатурка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#benefits" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#guarantees" className="hover:text-white transition-colors">Гарантии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@profshtukatur.ru</li>
                <li>Москва, ул. Строителей, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70">
            <p>© 2024 ПрофШтукатур. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
