package com.tripway.hotel_service.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI tripWayOpenAPI() {

        return new OpenAPI()
                .info(new Info()
                        .title("TripWay Hotel Service API")
                        .description(
                                "REST APIs for managing hotels in the TripWay platform"
                        )
                        .version("v1.0.0")
                        .contact(new Contact()
                                .name("TripWay Development Team")
                        )
                );
    }
}
