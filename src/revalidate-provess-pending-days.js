export function getRevalidateProcessPendingDays(today, mainProcessLastExecutionDayOfMonth, revalidateProcessLastExecutionDayOfMonth) {

	// Constraint2: Verificación de que revalidateProcessLastExecutionDayOfMonth no es mayor que mainProcessLastExecutionDayOfMonth
    if (revalidateProcessLastExecutionDayOfMonth > mainProcessLastExecutionDayOfMonth) {
        return "Invalid input: revalidateProcessLastExecutionDayOfMonth no puede ser mayor que mainProcessLastExecutionDayOfMonth."
    }

	// Constantes y variables definidas en README
    const WARMUP_DAYS = 2;
    let lastNotRevalidatedDayOfMonth = today - WARMUP_DAYS;
    let startPendingForRevalidateDayOfMonth = revalidateProcessLastExecutionDayOfMonth + 1;
    let lastPendingForRevalidateDayOfMonth = Math.min(mainProcessLastExecutionDayOfMonth, lastNotRevalidatedDayOfMonth);

    // Aseguramos que los días estén dentro del rango válido
	// No es necesario verificar si lastPendingForRevalidateDayOfMonth > 30 ya que siempre es cierto
    if (startPendingForRevalidateDayOfMonth > 30 || startPendingForRevalidateDayOfMonth < 1 || lastPendingForRevalidateDayOfMonth < 1) {
      return []; 
    }
  
    // Calculamos los días pendientes para revalidar, todos los dias entre "startPendingForRevalidateDayOfMonth" y "lastPendingForRevalidateDayOfMonth" 
    let pendingDays = [];
    for (let i = startPendingForRevalidateDayOfMonth; i <= lastPendingForRevalidateDayOfMonth; i++) {
      pendingDays.push(i);
    }
  
    return pendingDays;
  }


  