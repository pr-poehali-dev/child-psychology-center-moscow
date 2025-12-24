import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Brain",
      title: "Нейропсихолог",
      description: "Диагностика и коррекция развития высших психических функций"
    },
    {
      icon: "MessageCircle",
      title: "Логопед",
      description: "Постановка звуков, развитие речи, запуск речи у неговорящих детей"
    },
    {
      icon: "BookOpen",
      title: "Скорочтение",
      description: "Развитие навыков быстрого чтения и понимания текста"
    },
    {
      icon: "Calculator",
      title: "Скоросчет",
      description: "Ментальная арифметика и развитие математических способностей"
    },
    {
      icon: "GraduationCap",
      title: "Подготовка к школе",
      description: "Комплексная подготовка детей к успешному обучению в школе"
    },
    {
      icon: "Users",
      title: "Помощь подросткам",
      description: "Психологическая поддержка в переходном возрасте"
    },
    {
      icon: "Heart",
      title: "Коррекция поведения",
      description: "Работа с нежелательным поведением, формирование полезных навыков"
    },
    {
      icon: "Sparkles",
      title: "АВА-терапия",
      description: "Прикладной анализ поведения для детей с РАС и другими особенностями"
    },
    {
      icon: "Activity",
      title: "Нейрогимнастика",
      description: "Упражнения для развития межполушарных связей и координации"
    },
    {
      icon: "Smile",
      title: "Логомассаж",
      description: "Массаж речевого аппарата для улучшения артикуляции"
    }
  ];

  const specialists = [
    {
      name: "Елена Владимировна",
      role: "Нейропсихолог",
      experience: "15 лет опыта",
      education: "МГУ им. М.В. Ломоносова"
    },
    {
      name: "Ольга Сергеевна",
      role: "Логопед-дефектолог",
      experience: "12 лет опыта",
      education: "МПГУ, сертификат логомассажа"
    },
    {
      name: "Мария Александровна",
      role: "АВА-терапевт",
      experience: "8 лет опыта",
      education: "Сертификация BCaBA"
    }
  ];

  const reviews = [
    {
      author: "Анна М.",
      rating: 5,
      text: "Невероятные результаты! За 3 месяца занятий с нейропсихологом наш сын стал намного внимательнее и усидчивее. Спасибо огромное команде центра!"
    },
    {
      author: "Дмитрий К.",
      rating: 5,
      text: "Очень профессиональный подход к каждому ребенку. Логопед Ольга Сергеевна творит чудеса - дочка заговорила чисто всего за полгода занятий."
    },
    {
      author: "Светлана П.",
      rating: 5,
      text: "Центр стал для нас спасением. АВА-терапия помогла нашему сыну с аутизмом социализироваться и обрести новые навыки. Рекомендуем всем!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Icon name="Heart" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-foreground">Детский центр</h1>
              <p className="text-xs text-muted-foreground">Жулебино, Москва</p>
            </div>
          </div>
          <Button className="font-heading">
            Записаться на консультацию
          </Button>
        </div>
      </header>

      <section className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 text-sm font-heading bg-accent text-accent-foreground hover:bg-accent">
                <Icon name="Star" size={14} className="mr-1" />
                Рейтинг 5.0 на Яндекс.Картах
              </Badge>
              <h2 className="text-5xl font-heading font-bold mb-6 text-foreground leading-tight">
                Центр развития и коррекции для детей
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Помогаем детям раскрыть их потенциал через современные методики нейропсихологии, 
                логопедии и АВА-терапии. Индивидуальный подход к каждому ребенку.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="font-heading text-base">
                  <Icon name="Calendar" size={18} className="mr-2" />
                  Записаться на прием
                </Button>
                <Button size="lg" variant="outline" className="font-heading text-base">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Позвонить нам
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-white" />
                  ))}
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">500+ счастливых семей</p>
                  <p className="text-sm text-muted-foreground">Довольных результатами</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/40 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Icon name="Sparkles" size={80} className="text-primary mx-auto" />
                  <p className="text-2xl font-heading font-semibold text-foreground">
                    Профессиональная помощь детям
                  </p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl opacity-60 animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge className="mb-4 font-heading bg-muted text-muted-foreground">
              Наши услуги
            </Badge>
            <h3 className="text-4xl font-heading font-bold mb-4 text-foreground">
              Комплексная помощь для развития ребенка
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Все необходимые специалисты в одном центре для удобства родителей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/50 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon name={service.icon} className="text-primary group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h4 className="text-xl font-heading font-semibold mb-2 text-foreground">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-accent/30 to-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge className="mb-4 font-heading bg-primary text-primary-foreground">
              Наша команда
            </Badge>
            <h3 className="text-4xl font-heading font-bold mb-4 text-foreground">
              Опытные специалисты
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессионалы с высшим образованием и многолетним опытом работы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4" />
                  <h4 className="text-xl font-heading font-bold mb-1 text-foreground">
                    {specialist.name}
                  </h4>
                  <p className="text-primary font-semibold mb-2">{specialist.role}</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p className="flex items-center justify-center gap-2">
                      <Icon name="Award" size={16} />
                      {specialist.experience}
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <Icon name="BookOpen" size={16} />
                      {specialist.education}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge className="font-heading bg-accent text-accent-foreground">
                Отзывы родителей
              </Badge>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
            </div>
            <h3 className="text-4xl font-heading font-bold mb-4 text-foreground">
              Что говорят наши клиенты
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Рейтинг 5.0 на Яндекс.Картах — результат нашей работы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed">
                    "{review.text}"
                  </p>
                  <p className="font-heading font-semibold text-sm text-primary">
                    {review.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <Icon name="MapPin" size={48} className="mx-auto mb-6" />
          <h3 className="text-4xl font-heading font-bold mb-4">
            Посетите наш центр в Жулебино
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Москва, район Жулебино • Удобное расположение • Бесплатная парковка
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="MapPin" size={24} />
              <span className="font-heading text-xl font-semibold">Яндекс.Карты</span>
            </div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon key={star} name="Star" className="text-yellow-300 fill-yellow-300" size={24} />
              ))}
            </div>
            <p className="text-2xl font-bold">Рейтинг 5.0</p>
            <p className="text-sm opacity-80 mt-1">На основе реальных отзывов клиентов</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="font-heading text-base">
              <Icon name="Map" size={18} className="mr-2" />
              Посмотреть на карте
            </Button>
            <Button size="lg" variant="outline" className="font-heading text-base border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Icon name="Heart" className="text-white" size={20} />
                </div>
                <h4 className="font-heading font-bold text-lg">Детский центр</h4>
              </div>
              <p className="text-sm text-white/70">
                Профессиональная помощь в развитии и коррекции для детей
              </p>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Нейропсихолог</li>
                <li>Логопед</li>
                <li>АВА-терапия</li>
                <li>Подготовка к школе</li>
              </ul>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-1" />
                  Москва, Жулебино
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@center.ru
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-4">Режим работы</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Пн-Пт: 9:00 - 20:00</li>
                <li>Сб-Вс: 10:00 - 18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>© 2024 Детский центр развития. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
