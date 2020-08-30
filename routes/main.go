package routes

import (
	"github.com/gin-gonic/gin"
)

// SetupRoutes creates a simple router
func SetupRoutes() *gin.Engine {
	r := gin.Default()

	api := r.Group("/api")
	Sample(api)

	return r
}
