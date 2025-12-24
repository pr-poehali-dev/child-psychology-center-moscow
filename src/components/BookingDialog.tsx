import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

interface BookingDialogProps {
  children: React.ReactNode;
}

const BookingDialog = ({ children }: BookingDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    phone: "",
    specialist: "",
    date: "",
    time: "",
    comment: ""
  });

  const specialists = [
    "Нейропсихолог",
    "Логопед",
    "АВА-терапевт",
    "Подготовка к школе",
    "Скорочтение",
    "Скоросчет",
    "Помощь подросткам",
    "Нейрогимнастика"
  ];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", 
    "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.parentName || !formData.childName || !formData.phone || !formData.specialist || !formData.date || !formData.time) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, укажите все обязательные данные для записи",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Заявка отправлена! 🎉",
      description: `Мы свяжемся с вами в ближайшее время для подтверждения записи на ${formData.date} в ${formData.time}`,
    });

    setFormData({
      parentName: "",
      childName: "",
      phone: "",
      specialist: "",
      date: "",
      time: "",
      comment: ""
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading flex items-center gap-2">
            <Icon name="Calendar" size={24} className="text-primary" />
            Запись на консультацию
          </DialogTitle>
          <DialogDescription>
            Заполните форму, и мы свяжемся с вами для подтверждения записи
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="parentName" className="flex items-center gap-2">
                <Icon name="User" size={16} />
                Имя родителя *
              </Label>
              <Input
                id="parentName"
                placeholder="Анна Иванова"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="childName" className="flex items-center gap-2">
                <Icon name="Baby" size={16} />
                Имя ребенка *
              </Label>
              <Input
                id="childName"
                placeholder="Максим"
                value={formData.childName}
                onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Icon name="Phone" size={16} />
              Телефон *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (999) 123-45-67"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialist" className="flex items-center gap-2">
              <Icon name="Stethoscope" size={16} />
              Специалист *
            </Label>
            <Select 
              value={formData.specialist} 
              onValueChange={(value) => setFormData({ ...formData, specialist: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите специалиста" />
              </SelectTrigger>
              <SelectContent>
                {specialists.map((specialist) => (
                  <SelectItem key={specialist} value={specialist}>
                    {specialist}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2">
                <Icon name="CalendarDays" size={16} />
                Желаемая дата *
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                Желаемое время *
              </Label>
              <Select 
                value={formData.time} 
                onValueChange={(value) => setFormData({ ...formData, time: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите время" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment" className="flex items-center gap-2">
              <Icon name="MessageSquare" size={16} />
              Комментарий (необязательно)
            </Label>
            <Textarea
              id="comment"
              placeholder="Расскажите о запросе или задайте вопрос..."
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              rows={4}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button type="submit" className="flex-1 font-heading text-base" size="lg">
              <Icon name="Send" size={18} className="mr-2" />
              Отправить заявку
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="font-heading text-base"
              size="lg"
            >
              Отмена
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
