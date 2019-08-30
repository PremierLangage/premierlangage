from django.contrib.postgres.fields import JSONField
from django.db import models



class Sandbox(models.Model):
    name = models.CharField(max_length=255)
    url = models.URLField(max_length=255)
    version = models.CharField(blank=True, default="0.0.0")
    docker_version = models.CharField(blank=True, default="0.0.0")
    envvars = JSONField(verbose_name="Environment variable", blank=True, default={})
    
    container_total = models.PositiveSmallIntegerField(
        verbose_name="Total number of container", default=0, blank=True)
    container_running = models.PositiveSmallIntegerField(
        verbose_name="Running container", default=0, blank=True)
    container_available = models.PositiveSmallIntegerField(
        verbose_name="Available container", default=0, blank=True)
    
    cpu_name = models.CharField(verbose_name="CPU name", blank=True, default="")
    cpu_count = models.PositiveSmallIntegerField(
        verbose_name="Number of CPU Core", default=0, blank=True)
    cpu_period = models.PositiveSmallIntegerField(
        verbose_name="CPU period", default=0, blank=True)
    cpu_shares = models.PositiveSmallIntegerField(
        verbose_name="CPU shares", default=0, blank=True)
    cpu_quota = models.PositiveSmallIntegerField(
        verbose_name="CPU quota", default=0, blank=True)
    
    memory_ram = models.BigIntegerField(verbose_name="RAM", default=0, blank=True)
    memory_swap = models.BigIntegerField(verbose_name="Swap", default=0, blank=True)
    memory_storage = models.BigIntegerField(
        verbose_name="Storage", default=-1, blank=True, help_text="-1 means a value of 'host'.")
