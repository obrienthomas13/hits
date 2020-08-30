package main

import (
	"github.com/obrienthomas13/hits/routes"
)

func main() {
	r := routes.SetupRoutes()
	r.Run()
}
