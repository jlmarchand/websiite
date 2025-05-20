library(tidyverse)
library(plotly)
x <- seq(-3,3,by = .1)
df <- data.frame(x, y = x^2)
df %>% plot_ly() %>% add_lines(x = ~x, y = ~y) %>%
  layout(
    yaxis = list(scaleanchor = "x")  # Fixe l'échelle Y par rapport à X
  )
