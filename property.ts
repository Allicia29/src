export interface Property {
  id: string;
  title: string;
  guestCapacity: number;
  pricePerNight: number;
  isAvailable: boolean;
  createdAt: Date;
}

// Exemplo: src/infrastructure/persistence/models/property.model.ts (Modelo de Persistência)
export interface PropertyModel {
  _id: string; // ID do banco de dados
  property_title: string;
  capacity: number;
  daily_rate: number;
  available: boolean;
  created_at: string; // Data geralmente armazenada como string no BD
}

// Repita o mesmo para Booking (Booking e BookingModel)