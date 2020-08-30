package routes

import "github.com/gin-gonic/gin"

// Sample returns test routes for testing Gin
func Sample(r *gin.RouterGroup) {
	sample := r.Group("/sample")

	sample.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
}
