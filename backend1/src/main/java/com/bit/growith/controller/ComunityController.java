package com.bit.growith.controller;

import com.bit.growith.service.ComunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class ComunityController {

    @Autowired
    private ComunityService comunityService;
}
