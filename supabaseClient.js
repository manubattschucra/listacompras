// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://svzggvgkuqtsxmqnnvnf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2emdndmdrdXF0c3htcW5udm5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU2NTAsImV4cCI6MjA2MjExMTY1MH0.Rfa-tlD5UHT_qwVG0abNzelw4xK-DBKo7AXoU4PPQ-0'
)